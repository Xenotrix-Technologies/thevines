const fs = require("fs");
const path = require("path");
const sharp = require(path.join(process.cwd(), "node_modules", "sharp"));

const IMAGES_DIR = path.join(process.cwd(), "public", "images");

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function optimizeImages() {
  console.log("Analyzing and optimizing images in:", IMAGES_DIR);

  const filePaths = getAllFiles(IMAGES_DIR);
  let totalSavedBytes = 0;
  let count = 0;

  for (const filePath of filePaths) {
    const file = path.relative(IMAGES_DIR, filePath);
    const ext = path.extname(filePath).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
      continue;
    }
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;

    try {
      const metadata = await sharp(filePath).metadata();
      const needsResize = metadata.width > 1920 || metadata.height > 1920;
      const isLargeFile = originalSize > 350 * 1024;

      if (!needsResize && !isLargeFile) {
        continue;
      }

      console.log(`Optimizing: ${file} (${metadata.width}x${metadata.height}, ${(originalSize / 1024 / 1024).toFixed(2)} MB)...`);

      let transformer = sharp(filePath).rotate(); // auto-orient based on EXIF

      if (needsResize) {
        transformer = transformer.resize({
          width: 1920,
          height: 1920,
          fit: "inside",
          withoutEnlargement: true,
        });
      }

      if (ext === ".jpg" || ext === ".jpeg") {
        transformer = transformer.jpeg({ quality: 84, progressive: true, mozjpeg: true });
      } else if (ext === ".webp") {
        transformer = transformer.webp({ quality: 82 });
      } else if (ext === ".png") {
        transformer = transformer.png({ quality: 85, compressionLevel: 8 });
      }

      const tempPath = filePath + ".tmp";
      await transformer.toFile(tempPath);

      const newStats = fs.statSync(tempPath);
      const newSize = newStats.size;

      if (newSize < originalSize) {
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        const saved = originalSize - newSize;
        totalSavedBytes += saved;
        count++;
        console.log(`  -> Compressed to: ${(newSize / 1024).toFixed(0)} KB (Saved ${(saved / 1024 / 1024).toFixed(2)} MB, -${((saved / originalSize) * 100).toFixed(0)}%)`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`  -> Kept original (no compression gain).`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log("\n==========================================");
  console.log(`Successfully optimized ${count} oversized images!`);
  console.log(`Total bandwidth saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB!`);
  console.log("==========================================");
}

optimizeImages();

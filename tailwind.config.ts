import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          light: "#F7F7F7",
          border: "#EAEAEA",
          subtle: "#D9D9D9",
          gray: "#999999",
          charcoal: "#383838",
          darkgray: "#333333",
          deep: "#1A1A1A",
          black: "#0A0A0A",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Cambria", "'Times New Roman'", "Times", "serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;

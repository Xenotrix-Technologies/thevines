import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    const errors: Record<string, string> = {};

    if (!body.name || body.name.trim().length < 2) {
      errors.name = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    const cleanedPhone = (body.phone || "").replace(/[^0-9+]/g, "");
    if (!cleanedPhone || cleanedPhone.length < 8) {
      errors.phone = "Please enter a valid phone number (at least 8 digits).";
    }

    if (!body.message || body.message.trim().length < 5) {
      errors.message = "Please write a message with at least 5 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed. Please correct the errors." },
        { status: 400 }
      );
    }

    const submission = {
      id: "sub_" + Date.now(),
      timestamp: new Date().toISOString(),
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: cleanedPhone,
      message: body.message.trim(),
      subject: body.subject?.trim() || "Website Contact Enquiry",
    };

    // Persist to local JSON submissions file for record-keeping
    try {
      const storageDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir, { recursive: true });
      }
      const storageFile = path.join(storageDir, "contact_submissions.json");
      let existing: any[] = [];
      if (fs.existsSync(storageFile)) {
        try {
          existing = JSON.parse(fs.readFileSync(storageFile, "utf8"));
        } catch (e) {
          existing = [];
        }
      }
      existing.push(submission);
      fs.writeFileSync(storageFile, JSON.stringify(existing, null, 2), "utf8");
    } catch (fsErr) {
      console.warn("Could not save to local log file:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting THE VINES ROOMS. Your message has been received, and our team will get back to you shortly.",
      referenceId: submission.id,
    });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}


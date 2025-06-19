import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    const { name, email, mobileNumber, message } = await req.json();

    if (!name || !email || !mobileNumber || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const newContact = new Contact({
      name,
      email,
      mobileNumber,
      message,
    });

    await newContact.save();

    return NextResponse.json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error: any) {
    console.error("❌ Contact form error:", error.message);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

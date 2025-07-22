import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const experience = formData.get("experience") as string
    const message = formData.get("message") as string
    const resume = formData.get("resume") as File

    if (!name || !email || !phone || !position || !experience || !message || !resume) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Convert File to Buffer for nodemailer
    const arrayBuffer = await resume.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.APPLICATIONS_EMAIL,
      subject: `New Job Application from outkastindustrial.com`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Position: ${position}
        Experience: ${experience} years
        Message: ${message}
      `,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experience} years</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Application submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error submitting application:", error)
    return NextResponse.json(
      {
        error: "Error submitting application",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

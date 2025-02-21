import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
  }

  try {
    const formData = await req.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    console.log("Form data received:", { name, email, phone, company, service })

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.APPLICATIONS_EMAIL,
      subject: `New Contact Form Submission from outkastindustrial.com`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    }

    console.log("Attempting to send email...")
    await transporter.sendMail(mailOptions)
    console.log("Email sent successfully")

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ error: "Error sending message", details: error }, { status: 500 })
  }
}


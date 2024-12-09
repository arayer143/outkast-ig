import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { Readable } from 'stream'

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const experience = formData.get('experience') as string
    const message = formData.get('message') as string
    const resume = formData.get('resume') as File

    const resumeBuffer = await resume.arrayBuffer()
    const resumeStream = new Readable()
    resumeStream.push(Buffer.from(resumeBuffer))
    resumeStream.push(null)

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.APPLICATIONS_EMAIL,
      subject: `New Job Application from: ${name}`,
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
          content: resumeStream,
        },
      ],
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error submitting application:', error)
    return NextResponse.json({ error: 'Error submitting application' }, { status: 500 })
  }
}
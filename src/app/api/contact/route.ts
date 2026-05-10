import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { from_name, from_email, website, pricing_model, message } = await req.json()

  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS

  if (!user || !pass) {
    return NextResponse.json({ error: 'Email not configured' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })

  await transporter.sendMail({
    from: `"${from_name}" <${user}>`,
    to: user,
    replyTo: from_email,
    subject: `Contact Us: New message from ${from_name}`,
    text: [
      `From: ${from_name} (${from_email})`,
      `Website: ${website}`,
      `Pricing interest: ${pricing_model}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <p><strong>From:</strong> ${from_name} (<a href="mailto:${from_email}">${from_email}</a>)</p>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Pricing interest:</strong> ${pricing_model}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}

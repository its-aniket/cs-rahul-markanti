import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Validate environment ─────────────────────────────────────────────────

function getEnv(key: string): string {
  const val = process.env[key];
  if (!val) throw new Error(`Missing env variable: ${key}`);
  return val;
}

// ─── POST /api/contact ────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    };

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    // Email address sanity check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── Create Nodemailer transporter (GoDaddy SMTP) ──
    // Try port 587 (STARTTLS) first; GoDaddy also supports 465 (SSL)
    const smtpPort = Number(getEnv("SMTP_PORT")); // 587 recommended
    const transporter = nodemailer.createTransport({
      host: getEnv("SMTP_HOST"),
      port: smtpPort,
      secure: smtpPort === 465,   // true only for port 465
      requireTLS: smtpPort === 587,
      auth: {
        user: getEnv("SMTP_USER"),
        pass: getEnv("SMTP_PASS"),
      },
      connectionTimeout: 10000,   // 10 s — fail fast rather than hang
      tls: {
        rejectUnauthorized: false, // GoDaddy cert compatibility
        ciphers: "SSLv3",
      },
    });

    const toAddress = getEnv("SMTP_TO");
    const fromAddress = getEnv("SMTP_USER");

    // ── Email to firm (notification) ──
    await transporter.sendMail({
      from: `"Website Enquiry" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Enquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B2A4A; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">
              New Website Enquiry
            </h2>
            <p style="color: #C8972B; margin: 4px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
              Rahul Markanti &amp; Associates
            </p>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px; vertical-align: top; font-weight: 600;">Name</td>
                <td style="padding: 8px 0; color: #111827;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; vertical-align: top; font-weight: 600;">Email</td>
                <td style="padding: 8px 0; color: #111827;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #C8972B;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; vertical-align: top; font-weight: 600;">Phone</td>
                <td style="padding: 8px 0; color: #111827;">${escapeHtml(phone)}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #6b7280; vertical-align: top; font-weight: 600;">Service</td>
                <td style="padding: 8px 0; color: #111827;">${escapeHtml(subject)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; vertical-align: top; font-weight: 600; border-top: 1px solid #e5e7eb;">Message</td>
                <td style="padding: 8px 0; color: #111827; border-top: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(message)}</td>
              </tr>
            </table>
          </div>
          <p style="font-size: 12px; color: #9ca3af; margin-top: 16px; text-align: center;">
            This message was sent from the contact form at csrahulmarkanti.com
          </p>
        </div>
      `,
    });

    // ── Auto-reply to the enquirer ──
    await transporter.sendMail({
      from: `"Rahul Markanti & Associates" <${fromAddress}>`,
      to: email,
      subject: "Thank you for your enquiry — Rahul Markanti & Associates",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B2A4A; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Thank You for Reaching Out</h2>
            <p style="color: #C8972B; margin: 4px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
              Rahul Markanti &amp; Associates · Company Secretaries
            </p>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="font-size: 15px; color: #374151; line-height: 1.6; margin-top: 0;">
              Dear ${escapeHtml(name)},
            </p>
            <p style="font-size: 15px; color: #374151; line-height: 1.6;">
              Thank you for your enquiry regarding <strong>${escapeHtml(subject)}</strong>.
              We have received your message and our team will get back to you within
              <strong>1–2 business days</strong>.
            </p>
            <p style="font-size: 15px; color: #374151; line-height: 1.6;">
              For urgent matters, you can also reach us directly:
            </p>
            <div style="background: #f9f9f9; border-left: 4px solid #C8972B; padding: 16px 20px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0 0 6px; font-size: 14px; color: #374151;">
                📞 <a href="tel:+918830383872" style="color: #1B2A4A; text-decoration: none; font-weight: 600;">+91 88303 83872</a>
              </p>
              <p style="margin: 0; font-size: 14px; color: #374151;">
                📧 <a href="mailto:enquiry@csrahulmarkanti.com" style="color: #C8972B;">enquiry@csrahulmarkanti.com</a>
              </p>
            </div>
            <p style="font-size: 14px; color: #6b7280; line-height: 1.6; margin-bottom: 0;">
              Warm regards,<br />
              <strong style="color: #1B2A4A;">CS Rahul Markanti</strong><br />
              Rahul Markanti &amp; Associates · ICSI Regulated
            </p>
          </div>
          <p style="font-size: 11px; color: #9ca3af; margin-top: 16px; text-align: center; line-height: 1.5;">
            This is an automated acknowledgement. Please do not reply to this email.<br />
            <em>Disclaimer: This communication is for informational purposes only and does not constitute professional advice or create a client relationship.</em>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact API]", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}

// Simple HTML escape to prevent injection in email body
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

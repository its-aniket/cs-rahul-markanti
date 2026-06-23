import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─── POST /api/contact ────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO ?? "enquiry@csrahulmarkanti.com";
  const fromAddress = process.env.CONTACT_FROM ?? "onboarding@resend.dev"; // default until domain verified

  if (!apiKey) {
    console.error("[contact API] Missing RESEND_API_KEY env variable");
    return NextResponse.json(
      { error: "Server misconfiguration. Please contact us directly." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    };

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const resend = new Resend(apiKey);

    // ── 1. Notification email to the firm ──────────────────────────────────
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New Enquiry: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1B2A4A;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">New Website Enquiry</h2>
            <p style="color:#C8972B;margin:4px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:1px;">
              Rahul Markanti &amp; Associates
            </p>
          </div>
          <div style="background:#f9f9f9;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr>
                <td style="padding:8px 0;color:#6b7280;width:120px;font-weight:600;vertical-align:top;">Name</td>
                <td style="padding:8px 0;color:#111827;">${e(name)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-weight:600;vertical-align:top;">Email</td>
                <td style="padding:8px 0;color:#111827;">
                  <a href="mailto:${e(email)}" style="color:#C8972B;">${e(email)}</a>
                </td>
              </tr>
              ${phone?.trim() ? `
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-weight:600;vertical-align:top;">Phone</td>
                <td style="padding:8px 0;color:#111827;">${e(phone)}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-weight:600;vertical-align:top;">Service</td>
                <td style="padding:8px 0;color:#111827;">${e(subject)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-weight:600;vertical-align:top;border-top:1px solid #e5e7eb;">Message</td>
                <td style="padding:8px 0;color:#111827;border-top:1px solid #e5e7eb;white-space:pre-wrap;">${e(message)}</td>
              </tr>
            </table>
          </div>
          <p style="font-size:12px;color:#9ca3af;margin-top:16px;text-align:center;">
            Submitted via csrahulmarkanti.com
          </p>
        </div>
      `,
    });

    // ── 2. Auto-reply to the enquirer ──────────────────────────────────────
    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "Thank you for your enquiry — Rahul Markanti & Associates",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1B2A4A;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">Thank You for Reaching Out</h2>
            <p style="color:#C8972B;margin:4px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:1px;">
              Rahul Markanti &amp; Associates · Company Secretaries
            </p>
          </div>
          <div style="background:#fff;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <p style="font-size:15px;color:#374151;line-height:1.6;margin-top:0;">Dear ${e(name)},</p>
            <p style="font-size:15px;color:#374151;line-height:1.6;">
              Thank you for your enquiry regarding <strong>${e(subject)}</strong>.
              We have received your message and will get back to you within
              <strong>1–2 business days</strong>.
            </p>
            <div style="background:#f9f9f9;border-left:4px solid #C8972B;padding:16px 20px;border-radius:4px;margin:20px 0;">
              <p style="margin:0 0 6px;font-size:14px;color:#374151;">
                📞 <a href="tel:+918830383872" style="color:#1B2A4A;font-weight:600;text-decoration:none;">+91 88303 83872</a>
              </p>
              <p style="margin:0;font-size:14px;color:#374151;">
                📧 <a href="mailto:enquiry@csrahulmarkanti.com" style="color:#C8972B;">enquiry@csrahulmarkanti.com</a>
              </p>
            </div>
            <p style="font-size:14px;color:#6b7280;line-height:1.6;margin-bottom:0;">
              Warm regards,<br/>
              <strong style="color:#1B2A4A;">CS Rahul Markanti</strong><br/>
              Rahul Markanti &amp; Associates · ICSI Regulated
            </p>
          </div>
          <p style="font-size:11px;color:#9ca3af;margin-top:16px;text-align:center;line-height:1.5;">
            This is an automated acknowledgement. Please do not reply to this email.<br/>
            <em>Disclaimer: This communication is for informational purposes only and does not constitute professional advice or create a client relationship.</em>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact API] Resend error:", msg);
    return NextResponse.json(
      { error: "Failed to send message. Please email us directly at enquiry@csrahulmarkanti.com" },
      { status: 500 }
    );
  }
}

// Minimal HTML escape
function e(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

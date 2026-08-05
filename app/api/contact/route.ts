import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const formData = await req.formData().catch(() => null);

  if (!formData) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = formData.get("name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const phone = formData.get("phone")?.toString() ?? "";
  const subject = formData.get("subject")?.toString() ?? "";
  const message = formData.get("message")?.toString() ?? "";
  const inquiryType = formData.get("inquiryType")?.toString() ?? "general";
  const attachment = formData.get("attachment");

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  // Route fragrance/SciTech Products inquiries to the dedicated inbox;
  // everything else goes to the general contact address.
  const generalToAddress = process.env.CONTACT_TO_EMAIL ?? "info@drchemlab.com";
  const fragranceToAddress =
    process.env.FRAGRANCE_TO_EMAIL ?? "scitechfrag@drchemlab.com";
  const toAddress = inquiryType === "fragrance" ? fragranceToAddress : generalToAddress;

  const fromAddress =
    process.env.CONTACT_FROM_EMAIL ?? "DrChemLab Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email sending is not configured yet. Please try again later or email us directly." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const attachments: { filename: string; content: Buffer }[] = [];
    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "Attachment is too large (10MB max)." }, { status: 400 });
      }
      const buffer = Buffer.from(await attachment.arrayBuffer());
      attachments.push({ filename: attachment.name, content: buffer });
    }

    const inquiryLabel =
      inquiryType === "fragrance" ? "SciTech Fragrances" : "General Inquiry";

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New message: ${subject || inquiryLabel} \u2013 ${name}`,
      html: `
        <h2>New message from the DrChemLab website</h2>
        <p><strong>Inquiry Type:</strong> ${escapeHtml(inquiryLabel)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "\u2014")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || "\u2014")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
      attachments: attachments.length ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
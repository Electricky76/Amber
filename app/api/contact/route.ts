import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim()
      : "";
  const phone =
    typeof body === "object" &&
    body !== null &&
    "phone" in body &&
    typeof (body as { phone: unknown }).phone === "string"
      ? (body as { phone: string }).phone.trim()
      : "";
  const message =
    typeof body === "object" &&
    body !== null &&
    "message" in body &&
    typeof (body as { message: unknown }).message === "string"
      ? (body as { message: string }).message.trim()
      : "";

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (!phone) {
    return NextResponse.json(
      { ok: false, message: "Please enter your phone number." },
      { status: 400 },
    );
  }

  const to =
    process.env.CONTACT_TO_EMAIL?.trim() || "amber@ambermorrillevents.com";
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY missing — accept inquiry (fallback mode)", {
      email,
      phone,
      hasMessage: Boolean(message),
    });
    return NextResponse.json({
      ok: true,
      fallback: true,
      message:
        "Please email amber@ambermorrillevents.com until automated delivery is connected.",
    });
  }

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "Amber Morrill Site <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const html = `
    <p><strong>New inquiry</strong> from ambermorrillevents.com</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    ${
      message
        ? `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`
        : ""
    }
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: "New inquiry — Amber Morrill Events",
    html,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not send your message right now. Please email amber@ambermorrillevents.com directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, fallback: false });
}

"use client";

import { useState } from "react";

const DIRECT_EMAIL = "amber@ambermorrillevents.com";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [notice, setNotice] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setNotice(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, message }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        fallback?: boolean;
        message?: string;
      };

      if (res.ok && data.ok) {
        setStatus("success");
        setNotice(
          data.fallback
            ? `Automated email isn’t turned on yet—please also send a quick note to ${DIRECT_EMAIL} so Amber receives your inquiry right away.`
            : "Thank you. Amber will be in touch shortly.",
        );
        setEmail("");
        setPhone("");
        setMessage("");
        return;
      }

      setStatus("error");
      setNotice(
        data.message ??
          "Something went wrong. Please email Amber directly using the link below.",
      );
    } catch {
      setStatus("error");
      setNotice(
        `Please email Amber directly at ${DIRECT_EMAIL} or try again.`,
      );
    }
  }

  const mailtoHref = `mailto:${DIRECT_EMAIL}?subject=${encodeURIComponent(
    "Inquiry — Amber Morrill Events",
  )}&body=${encodeURIComponent(
    `Email: ${email}\nPhone: ${phone}\n\n${message}`,
  )}`;

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-olive/20 bg-offwhite px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.3em] text-moss">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-extralight text-ink md:text-4xl">
            Say hello—your celebration starts here
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink/75">
            Share your email and phone number. Amber will reach out to hear
            more about your date, vision, and how we can help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="font-ui text-xs font-semibold uppercase tracking-[0.15em] text-moss"
            >
              Email <span className="text-wine">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border border-olive/25 bg-egg px-4 py-3 font-body text-ink outline-none ring-moss/30 transition placeholder:text-ink/35 focus:border-moss focus:ring-2"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="font-ui text-xs font-semibold uppercase tracking-[0.15em] text-moss"
            >
              Phone <span className="text-wine">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full border border-olive/25 bg-egg px-4 py-3 font-body text-ink outline-none ring-moss/30 transition placeholder:text-ink/35 focus:border-moss focus:ring-2"
              placeholder="Best number to reach you"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="font-ui text-xs font-semibold uppercase tracking-[0.15em] text-moss"
            >
              Tell us about your event (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-y border border-olive/25 bg-egg px-4 py-3 font-body text-ink outline-none ring-moss/30 transition placeholder:text-ink/35 focus:border-moss focus:ring-2"
              placeholder="Wedding date, location, or how we can help…"
            />
          </div>

          {notice && (
            <p
              className={`font-body text-sm leading-relaxed ${
                status === "error" ? "text-wine" : "text-moss"
              }`}
              role="status"
            >
              {notice}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="font-ui w-full bg-moss px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-offwhite transition hover:bg-wine disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Request contact"}
          </button>

          <p className="text-center font-body text-sm text-ink/65">
            Prefer email?{" "}
            <a
              href={mailtoHref}
              className="font-medium text-moss underline underline-offset-4 hover:text-wine"
            >
              Open a draft in your mail app
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

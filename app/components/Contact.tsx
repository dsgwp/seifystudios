"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import FadeIn from "./FadeIn";

const CONTACT_EMAIL = "danielseify@yahoo.com";
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID!;

export default function Contact() {
  const [state, handleFormspreeSubmit, reset] = useForm(FORMSPREE_ID);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string).trim();
    const email = (data.get("email") as string).trim();
    const message = (data.get("message") as string).trim();

    if (!name || !email || !message) {
      setError("Please fill out all fields");
      return;
    }
    if (message.length < 50) {
      setError("Minimum 50 characters required for the message");
      return;
    }

    await handleFormspreeSubmit(e);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 px-6 md:px-12 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <FadeIn>
          <p className="text-dim text-[10px] tracking-[0.25em] uppercase mb-16">
            03 — Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            id="contact-heading"
            className="font-display font-extrabold leading-[0.92] tracking-tight text-ivory
                       text-[clamp(2.5rem,6vw,6rem)] mb-16 md:mb-20"
          >
            Let&apos;s build
            <br />
            <span className="text-gold">something</span>
            <br />
            great.
          </h2>
        </FadeIn>

        {/* Two-column content below the heading */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-16 md:gap-24 items-start">

          {/* Left: description + email */}
          <FadeIn delay={0.2}>
            <p className="text-dim leading-relaxed mb-8 text-base max-w-xs">
              Have a project in mind? Tell us about it — we&apos;d love to
              hear from you.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-ivory text-sm tracking-wide underline underline-offset-4
                         hover:text-gold transition-colors duration-200"
            >
              {CONTACT_EMAIL}
            </a>
          </FadeIn>

          {/* Right: contact form */}
          <FadeIn delay={0.25}>
            {state.succeeded ? (
              <div className="py-8">
                <p className="font-display font-bold text-2xl text-ivory mb-3">
                  Message received.
                </p>
                <p className="text-dim mb-8">
                  Thanks for reaching out — we&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-[#f7f3ed] font-semibold
                             text-sm tracking-wide hover:bg-gold/85 transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-dim text-[10px] tracking-[0.2em] uppercase mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-edge text-ivory py-3 text-base
                               focus:outline-none focus:border-gold transition-colors duration-200
                               placeholder:text-dim/40"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-2 text-sm text-red-400" />
                </div>

                {/* Email — also set as reply-to via Formspree's _replyto convention */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-dim text-[10px] tracking-[0.2em] uppercase mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-edge text-ivory py-3 text-base
                               focus:outline-none focus:border-gold transition-colors duration-200
                               placeholder:text-dim/40"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-sm text-red-400" />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-dim text-[10px] tracking-[0.2em] uppercase mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-edge text-ivory py-3 text-base
                               focus:outline-none focus:border-gold transition-colors duration-200
                               placeholder:text-dim/40 resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-sm text-red-400" />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-[#f7f3ed] font-semibold
                               text-sm tracking-wide hover:bg-gold/85 transition-colors duration-200
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending…" : "Send message"}
                    {!state.submitting && <span aria-hidden="true">→</span>}
                  </button>
                  {error && (
                    <p className="mt-4 text-sm text-red-400">{error}</p>
                  )}
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

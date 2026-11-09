"use client";

import { useState } from "react";
import { CONTACT } from "@/data/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState("");
  const [isOpeningDraft, setIsOpeningDraft] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = "Enter your name.";
    if (!email.trim()) nextErrors.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!message.trim()) nextErrors.message = "Add a short message about your project.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setIsOpeningDraft(false);
      setStatus("");
      return;
    }

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: CONTACT.email,
      su: `Portfolio inquiry — ${name.trim() || "no name"}`,
      body: `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`,
    });
    setIsOpeningDraft(true);
    setStatus("Opening Gmail with your message…");
    try {
      window.location.assign(`https://mail.google.com/mail/?${params.toString()}`);
    } catch {
      setIsOpeningDraft(false);
      setStatus(`Gmail could not be opened. Email ${CONTACT.email} directly.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={isOpeningDraft} className="flex w-full flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="section-label text-muted">Name</span>
          <input
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors((current) => ({ ...current, name: undefined })); }}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Your name"
            autoComplete="name"
            className="form-control w-full"
          />
          {errors.name ? <span id="contact-name-error" className="form-error" role="alert">{errors.name}</span> : null}
        </label>
        <label className="flex flex-col gap-2">
          <span className="section-label text-muted">Email</span>
          <input
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((current) => ({ ...current, email: undefined })); }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="you@example.com"
            autoComplete="email"
            className="form-control w-full"
          />
          {errors.email ? <span id="contact-email-error" className="form-error" role="alert">{errors.email}</span> : null}
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="section-label text-muted">Message</span>
        <textarea
          name="message"
          required
          value={message}
          onChange={(e) => { setMessage(e.target.value); setErrors((current) => ({ ...current, message: undefined })); }}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="Tell me a little about your project…"
          rows={5}
          className="form-control min-h-32 w-full resize-y"
        />
        {errors.message ? <span id="contact-message-error" className="form-error" role="alert">{errors.message}</span> : null}
      </label>
      <button
        type="submit"
        disabled={isOpeningDraft}
        className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-4 rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-accent-ink hover:bg-accent-hover disabled:cursor-wait disabled:opacity-70"
      >
        {isOpeningDraft ? "Opening Gmail…" : "Send message"} <span aria-hidden>↗</span>
      </button>
      <p className="min-h-5 text-sm text-muted" role="status" aria-live="polite">{status}</p>
    </form>
  );
}

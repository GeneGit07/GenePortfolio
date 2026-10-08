"use client";

import { useState } from "react";
import { CONTACT } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-background/15 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: CONTACT.email,
      su: `Portfolio inquiry — ${name.trim() || "no name"}`,
      body: `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`,
    });
    window.location.assign(`https://mail.google.com/mail/?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="section-label text-background/60">
            Name
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="section-label text-background/60">
            Email
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClass}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="section-label text-background/60">
          Message
        </span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me a little about your project…"
          rows={5}
          className={`${inputClass} resize-y`}
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-4 rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-foreground hover:bg-accent/85 sm:self-start"
      >
        Send message <span aria-hidden>↗</span>
      </button>
    </form>
  );
}

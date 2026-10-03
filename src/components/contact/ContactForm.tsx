"use client";

import { useState } from "react";
import { CONTACT } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-foreground focus:outline-none";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contacto portfolio — ${name.trim() || "sin nombre"}`,
    );
    const body = encodeURIComponent(
      `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted">
            Nombre
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted">
            Correo
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            autoComplete="email"
            className={inputClass}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted">
          Mensaje
        </span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Cuéntame sobre tu proyecto…"
          rows={5}
          className={`${inputClass} resize-y`}
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium tracking-wide text-background hover:bg-foreground/90 sm:self-start"
      >
        Enviar mensaje ↗
      </button>
    </form>
  );
}

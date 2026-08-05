"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!isValidEmail(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    try {
      const body = new FormData();
      body.set("name", form.name);
      body.set("email", form.email);
      body.set("phone", form.phone);
      body.set("message", form.message);

      // Note: no Content-Type header here — the browser sets the
      // multipart/form-data boundary automatically for FormData bodies.
      const res = await fetch("/api/contact", {
        method: "POST",
        body,
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-outline-variant bg-surface-container-low p-6">
        <p className="text-title-lg mb-1 text-deep-navy">Message sent!</p>
        <p className="text-body-md text-on-surface-variant">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-label-md mt-4 text-action-orange hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-label-md mb-1.5 block text-on-surface">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="text-body-md w-full rounded-lg border border-outline-variant bg-lab-white px-4 py-2.5 outline-none transition-colors focus:border-action-orange"
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="text-label-sm mt-1 text-secondary">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-label-md mb-1.5 block text-on-surface">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="text-body-md w-full rounded-lg border border-outline-variant bg-lab-white px-4 py-2.5 outline-none transition-colors focus:border-action-orange"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="text-label-sm mt-1 text-secondary">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="text-label-md mb-1.5 block text-on-surface">
          Phone <span className="text-on-surface-variant">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange("phone")}
          className="text-body-md w-full rounded-lg border border-outline-variant bg-lab-white px-4 py-2.5 outline-none transition-colors focus:border-action-orange"
          placeholder="+91 00000 00000"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-label-md mb-1.5 block text-on-surface">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="text-body-md w-full resize-none rounded-lg border border-outline-variant bg-lab-white px-4 py-2.5 outline-none transition-colors focus:border-action-orange"
          placeholder="How can we help?"
        />
        {errors.message && (
          <p id="message-error" className="text-label-sm mt-1 text-secondary">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-label-md text-secondary">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
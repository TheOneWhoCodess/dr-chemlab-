"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function FragranceSampleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const body = new FormData();
      body.set("name", name);
      body.set("email", email);
      body.set("inquiryType", "fragrance");
      body.set("subject", "Sample Pack Request");
      body.set(
        "message",
        `${name} requested a fragrance sample pack via the SciTech Fragrances page.`
      );

      const res = await fetch("/api/contact", { method: "POST", body });
      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg bg-lab-white p-8 text-on-surface clinical-shadow">
        <h3 className="text-title-lg mb-1 text-deep-navy">Request received!</h3>
        <p className="text-body-md text-on-surface-variant">
          Our SciTech Fragrances team will reach out with sample options shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-label-md mt-4 text-action-orange hover:underline"
        >
          Request another sample pack
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-lg bg-lab-white p-8 text-on-surface clinical-shadow"
    >
      <h3 className="text-title-lg mb-1 text-deep-navy">Request a Sample Pack</h3>
      <p className="text-body-md mb-4 text-on-surface-variant">
        Tell us your application and we&apos;ll send curated samples.
      </p>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-body-md w-full rounded border border-outline-variant p-3.5 focus:border-action-orange focus:outline-none focus:ring-1 focus:ring-action-orange"
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-body-md w-full rounded border border-outline-variant p-3.5 focus:border-action-orange focus:outline-none focus:ring-1 focus:ring-action-orange"
      />
      {error && <p className="text-label-sm text-secondary">{error}</p>}
      {status === "error" && (
        <p className="text-label-sm text-secondary">
          Something went wrong. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full !bg-action-orange"
      >
        {status === "submitting" ? "Sending…" : "Request Technical Data Sheet"}
      </button>
    </form>
  );
}
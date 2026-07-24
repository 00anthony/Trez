"use client";

import { useState, FormEvent } from "react";
import Button from "../ui/Button";

const services = [
  "Driveway",
  "Patio",
  "Foundation",
  "Slab",
  "Concrete Repair",
  "Residential Build",
  "Commercial Project",
  "Not Sure Yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center border border-charcoal-2 bg-charcoal/40 p-10 text-center">
        <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-concrete">
          Request received
        </h3>
        <p className="mt-3 max-w-sm text-sm text-concrete/65">
          We&rsquo;ll reach out within one business day to schedule your site
          visit. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-charcoal-2 bg-charcoal/40 p-7 md:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label className="mb-2 block font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
            Service Needed
          </label>
          <select
            name="service"
            required
            className="w-full border border-charcoal-2 bg-ink px-4 py-3 text-sm text-concrete focus:border-oxblood-light"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
            Project Details
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Approximate size, timeline, anything we should know"
            className="w-full resize-none border border-charcoal-2 bg-ink px-4 py-3 text-sm text-concrete placeholder:text-steel/70 focus:border-oxblood-light"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        icon={false}
        disabled={status === "submitting"}
        className="mt-7 w-full justify-center"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Estimate"}
      </Button>

      {status === "error" && (
        <p className="mt-3 text-sm text-oxblood-light">
          Something went wrong sending that — call us directly and we&rsquo;ll
          get you scheduled.
        </p>
      )}

      <p className="mt-4 text-center font-mono text-[10px] tracking-[0.1em] text-steel uppercase">
        No spam. No obligation. Response within 1 business day.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-charcoal-2 bg-ink px-4 py-3 text-sm text-concrete placeholder:text-steel/70 focus:border-oxblood-light"
      />
    </div>
  );
}

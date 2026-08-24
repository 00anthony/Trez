"use client";

import { useRef, useState, FormEvent } from "react";
import { UploadCloud, X, ImageIcon, CheckCircle2 } from "lucide-react";
import Button from "../../components/ui/Button";
import { services } from "../../lib/data";
import { getServiceContent } from "../../lib/audience";

const MAX_PHOTOS = 2;
const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

type Status = "idle" | "submitting" | "success" | "error";

export type ContactFormContext = {
  sourcePage: "service" | "service-area" | "audience-service" | "project";
  service?: string;
  location?: string;
};

export default function ContactForm({
  defaultService,
  context,
}: {
  /** Service slug to preselect in the dropdown, e.g. from a service page. */
  defaultService?: string;
  context?: ContactFormContext;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const defaultServiceMatch = defaultService ? services.find((s) => s.slug === defaultService) : undefined;
  const defaultServiceName = defaultServiceMatch ? getServiceContent(defaultServiceMatch).name : undefined;
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    setPhotoError(null);

    const incoming = Array.from(fileList);
    const room = MAX_PHOTOS - photos.length;

    if (room <= 0) {
      setPhotoError(`You can attach up to ${MAX_PHOTOS} photos.`);
      return;
    }

    const accepted: File[] = [];
    for (const file of incoming) {
      if (accepted.length >= room) break;
      if (!file.type.startsWith("image/")) {
        setPhotoError("Only image files are supported.");
        continue;
      }
      if (file.size > MAX_SIZE_BYTES) {
        setPhotoError(`Each photo must be under ${MAX_SIZE_MB}MB.`);
        continue;
      }
      accepted.push(file);
    }

    if (accepted.length > 0) {
      setPhotos((prev) => [...prev, ...accepted]);
    }

    // reset input so selecting the same file again still fires onChange
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removePhoto(index: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
    setPhotoError(null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    photos.forEach((file) => formData.append("photos", file));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
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
        <CheckCircle2 className="h-12 w-12 text-emerald-500" strokeWidth={1.5} />
        <h3 className="mt-5 font-display text-2xl font-semibold uppercase tracking-tight text-concrete">
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
            defaultValue={defaultServiceName ?? ""}
            className="w-full border border-charcoal-2 bg-ink px-4 py-3 text-sm text-concrete focus:border-oxblood-light"
          >
            <option value="">Select a service</option>
            {services.map((s) => {
              const name = getServiceContent(s).name;
              return (
                <option key={s.slug} value={name}>
                  {name}
                </option>
              );
            })}
            <option value="Not Sure Yet">Not Sure Yet</option>
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

        {/* Photo upload */}
        <div className="sm:col-span-2">
          <label className="mb-2 block font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
            Photos <span className="normal-case text-steel/60">(optional, up to {MAX_PHOTOS})</span>
          </label>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          {photos.length < MAX_PHOTOS && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer flex w-full flex-col items-center justify-center gap-2.5 border border-dashed border-charcoal-2 bg-ink px-6 py-8 text-center transition-colors hover:border-oxblood-light/60"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-2 bg-charcoal/60">
                <UploadCloud className="h-4 w-4 text-oxblood-light" strokeWidth={2} />
              </span>
              <span className="text-sm text-concrete/80">
                Click to upload, or{" "}
                <span className="text-oxblood-light underline underline-offset-2">
                  browse files
                </span>
              </span>
              <span className="font-mono text-[10px] tracking-[0.08em] text-steel uppercase">
                JPG or PNG · up to {MAX_SIZE_MB}MB each
              </span>
            </button>
          )}

          {photoError && (
            <p className="mt-2 text-xs text-oxblood-light">{photoError}</p>
          )}

          {photos.length > 0 && (
            <ul className="mt-3 space-y-2">
              {photos.map((file, i) => (
                <li
                  key={`${file.name}-${i}`}
                  className="flex items-center justify-between gap-3 border border-charcoal-2 bg-ink px-3 py-2.5"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <ImageIcon className="h-4 w-4 shrink-0 text-oxblood-light" />
                    <span className="min-w-0">
                      <span className="block truncate text-xs text-concrete/85">
                        {file.name}
                      </span>
                      <span className="block font-mono text-[10px] text-steel">
                        {(file.size / (1024 * 1024)).toFixed(1)}MB
                      </span>
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    aria-label={`Remove ${file.name}`}
                    className="shrink-0 p-1 text-steel hover:text-concrete"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {context?.sourcePage && <input type="hidden" name="sourcePage" value={context.sourcePage} />}
      {context?.location && <input type="hidden" name="location" value={context.location} />}

      <Button
        type="submit"
        variant="primary"
        icon={false}
        disabled={status === "submitting"}
        className="mt-7 w-full justify-center cursor-pointer"
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
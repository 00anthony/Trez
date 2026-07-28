import { siteConfig } from "../lib/site-config";

export type LeadDetails = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  photoCount: number;
};

/** Email sent to the business (the client) with the full lead details. */
export function clientNotificationEmail(lead: LeadDetails) {
  const subject = `New estimate request — ${lead.name} (${lead.service})`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="margin-bottom: 4px;">New Estimate Request</h2>
      <p style="color: #666; margin-top: 0;">Submitted via the ${siteConfig.name} website.</p>

      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tbody>
          ${row("Name", lead.name)}
          ${row("Phone", `<a href="tel:${lead.phone}">${lead.phone}</a>`)}
          ${row("Email", `<a href="mailto:${lead.email}">${lead.email}</a>`)}
          ${row("Service Needed", lead.service)}
          ${row("Project Details", lead.message || "—")}
          ${row("Photos Attached", String(lead.photoCount))}
        </tbody>
      </table>

      <p style="margin-top: 24px; color: #666; font-size: 12px;">
        Reply directly to this email to reach the customer at ${lead.email}.
      </p>
    </div>
  `;

  const text = [
    `New estimate request via ${siteConfig.name}`,
    ``,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `Service Needed: ${lead.service}`,
    `Project Details: ${lead.message || "—"}`,
    `Photos Attached: ${lead.photoCount}`,
  ].join("\n");

  return { subject, html, text };
}

/** Confirmation email sent back to the person who submitted the form. */
export function userConfirmationEmail(lead: LeadDetails) {
  const subject = `We've got your request — ${siteConfig.name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="margin-bottom: 4px;">Thanks, ${firstName(lead.name)}.</h2>
      <p style="color: #333;">
        We received your request for <strong>${lead.service}</strong> and
        we'll reach out within one business day to schedule your free
        site visit.
      </p>

      <p style="color: #333;">Here's what you submitted, for your records:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 8px;">
        <tbody>
          ${row("Service Needed", lead.service)}
          ${row("Project Details", lead.message || "—")}
        </tbody>
      </table>

      <p style="margin-top: 24px; color: #333;">
        Questions in the meantime? Call or text us at
        <a href="${siteConfig.phoneHref}">${siteConfig.phone}</a>.
      </p>

      <p style="margin-top: 24px; color: #666; font-size: 12px;">
        ${siteConfig.name} · ${siteConfig.serviceArea}
      </p>
    </div>
  `;

  const text = [
    `Thanks, ${firstName(lead.name)}.`,
    ``,
    `We received your request for ${lead.service} and we'll reach out`,
    `within one business day to schedule your free site visit.`,
    ``,
    `Service Needed: ${lead.service}`,
    `Project Details: ${lead.message || "—"}`,
    ``,
    `Questions in the meantime? Call or text us at ${siteConfig.phone}.`,
    ``,
    `${siteConfig.name} · ${siteConfig.serviceArea}`,
  ].join("\n");

  return { subject, html, text };
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 6px 12px 6px 0; color: #666; font-size: 13px; vertical-align: top; white-space: nowrap;">${label}</td>
      <td style="padding: 6px 0; font-size: 14px;">${value}</td>
    </tr>
  `;
}

function firstName(fullName: string) {
  return fullName.trim().split(/\s+/)[0] || fullName;
}
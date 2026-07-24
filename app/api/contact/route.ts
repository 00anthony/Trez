import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service } = body;

    if (!name || !phone || !email || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: wire this up to your CRM / email provider / Slack webhook.
    // e.g. send via Resend, forward to a CRM lead endpoint, etc.
    console.log("New estimate request:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

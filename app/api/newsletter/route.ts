import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listIdRaw = process.env.BREVO_LIST_ID;

  if (!apiKey || !listIdRaw) {
    return NextResponse.json(
      { error: "Server not configured. Set BREVO_API_KEY and BREVO_LIST_ID." },
      { status: 500 }
    );
  }

  const listId = Number.parseInt(listIdRaw, 10);
  if (Number.isNaN(listId)) {
    return NextResponse.json({ error: "BREVO_LIST_ID must be a number." }, { status: 500 });
  }

  let body: { email?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Brevo "create contact" — adds to a list, updates if the contact already exists.
  // https://developers.brevo.com/reference/createcontact
  const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
      attributes: { SOURCE: "website-newsletter" },
    }),
  });

  if (brevoRes.ok || brevoRes.status === 204) {
    return NextResponse.json({ ok: true });
  }

  // Brevo returns 400 with code "duplicate_parameter" when the contact already exists
  // *without* updateEnabled — with updateEnabled:true above we generally won't see this,
  // but handle defensively.
  const errJson = await brevoRes.json().catch(() => null);
  if (errJson?.code === "duplicate_parameter") {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: errJson?.message || "Brevo refused the request." },
    { status: brevoRes.status }
  );
}

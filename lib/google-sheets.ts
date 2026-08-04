import { google } from "googleapis";

/**
 * Appends one row per lead to a shared Google Sheet using a service
 * account (no OAuth consent screen, no per-user login).
 *
 * Setup required (see README for the full walkthrough):
 *   1. Create a Google Cloud project → enable the Google Sheets API.
 *   2. Create a Service Account → generate a JSON key.
 *   3. Share the target Google Sheet with the service account's email
 *      (found in the JSON key as `client_email`), with Editor access.
 *   4. Set these env vars:
 *        GOOGLE_SHEETS_CLIENT_EMAIL   ← the service account's client_email
 *        GOOGLE_SHEETS_PRIVATE_KEY    ← the service account's private_key
 *        GOOGLE_SHEET_ID              ← the sheet's ID from its URL
 *        GOOGLE_SHEET_TAB_NAME        ← e.g. "Leads" (optional, defaults below)
 */

export type LeadRow = {
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  photoCount: number;
};

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  // Env vars can't contain literal newlines, so the key is stored with
  // escaped "\n" sequences and unescaped here.
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google Sheets service account credentials");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function appendLeadToSheet(lead: LeadRow): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tabName = process.env.GOOGLE_SHEET_TAB_NAME || "Leads";

  if (!sheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID");
  }

  const sheets = getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tabName}!B2`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          lead.timestamp,
          lead.name,
          lead.phone,
          lead.email,
          lead.service,
          lead.message,
          lead.photoCount,
        ],
      ],
    },
  });
}
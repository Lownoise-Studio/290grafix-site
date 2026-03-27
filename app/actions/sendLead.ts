"use server";

import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details"),
});

export type SendLeadState =
  | { success: true }
  | {
      error: {
        name?: string[];
        email?: string[];
        service?: string[];
        message?: string[];
        server?: string[];
      };
    }
  | null;

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br />");
}

export async function sendLeadAction(
  _prevState: SendLeadState,
  formData: FormData,
): Promise<SendLeadState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const validated = ContactSchema.safeParse(rawData);
  if (!validated.success) {
    return { error: validated.error.flatten().fieldErrors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: {
        server: ["Email is not configured. Set RESEND_API_KEY on the server."],
      },
    };
  }

  const from =
    process.env.RESEND_FROM_EMAIL ??
    "290 GraFix Web <leads@yourdomain.com>";
  const to = process.env.RESEND_TO_EMAIL ?? "290grafix@gmail.com";

  const resend = new Resend(apiKey);

  const { name, email, service, message } = validated.data;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New Lead: ${service} for ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eb6a20;">
          <h2 style="color: #eb6a20;">New Project Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      return {
        error: {
          server: [error.message ?? "Failed to send email. Please try again."],
        },
      };
    }

    return { success: true };
  } catch {
    return { error: { server: ["Failed to send email. Please try again."] } };
  }
}

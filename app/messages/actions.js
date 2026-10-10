"use server";

import { revalidatePath } from "next/cache";
import { messages } from "@/lib/db";

export async function submitContactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return {
      success: false,
      error: "Semua field wajib diisi.",
    };
  }

  messages.push({
    id: Date.now(),
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  });

  revalidatePath("/messages");

  return { success: true };
}

export async function deleteMessageAction(id) {
  const index = messages.findIndex(
    (message) => String(message.id) === String(id)
  );

  if (index === -1) {
    return {
      success: false,
      error: "Pesan tidak ditemukan.",
    };
  }

  messages.splice(index, 1);

  revalidatePath("/messages");

  return { success: true };
}
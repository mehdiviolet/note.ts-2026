"use server";

import prisma from "../lib/prisma";
import { NoteInput, noteSchema } from "../lib/validations";

export async function createNote(data: NoteInput) {
  const validation = noteSchema.safeParse(data);

  if (!validation.success) {
    return { error: "validation is not safe!" };
  }
  try {
    const result = await prisma.note.create({
      data: validation.data,
    });
    return { success: true, note: result };
  } catch (err) {
    console.error(err);
    return { success: false, errore: "Error in create data" };
  }
}

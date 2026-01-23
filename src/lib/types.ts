import { Note, Category } from "@prisma/client";

export type NoteWithCategory = Note & {
  category: Category;
};

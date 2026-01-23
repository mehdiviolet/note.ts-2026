import z from "zod";

// export const categorySchema = z.object({
//   name: z.string().min(1, "Nome richiesto").max(50),
//   color: z.string().regex(/^#[0-9A-F]{6}$/i, "Colore non valido"),
// });

// export const noteSchema = z.object({
//   title: z.string().min(1, "Titolo richiesto").max(100),
//   content: z.string().min(1, "Contenuto richiesto"),
//   categoryId: z.string().min(1, "Categoria richiesta"),
//   coverUrl: z.string().url().optional().or(z.literal("")),
// });

// export type CategoryInput = z.infer<typeof categorySchema>;
// export type NoteInput = z.infer<typeof noteSchema>;

export const categorySchema = z.object({
  name: z.string().min(1, "nome richiesto").max(50),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Colore non valido"),
});

export const noteSchema = z.object({
  title: z.string().min(3, "minimus is three").max(100),
  content: z.string().min(1, "contenuto richesto"),
  //   categoryId:
  coverUrl: z
    .string()
    .optional()
    .nullable()
    .transform((val) => val || undefined),
});

export type CategoryInput = z.infer<typeof categorySchema>;
export type NoteInput = z.infer<typeof noteSchema>;

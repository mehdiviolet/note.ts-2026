"use server";

// actions abbiamo, lascia così, li usiamo per pagina categories

import prisma from "../lib/prisma";
import { CategoryInput, categorySchema } from "../lib/validations";
import { revalidatePath } from "next/cache";

// category-actions.ts

export const createCategory = async (data: CategoryInput) => {
  const result = categorySchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: "Dati non validi!" };
  }

  try {
    const category = await prisma.category.create({
      data: result.data,
    });

    revalidatePath("/");
    return { success: true, data: category };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Errore in database" };
  }
};

//GET CATEGORIES
export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: { _count: { select: { notes: true } } },
    });
    // Restituiamo sempre un oggetto con la stessa struttura
    return { success: true, data: categories };
  } catch (err) {
    console.error(err);
    return { success: false, data: [], errore: "errore nel Database" };
  }
}

// UPDATE CATEGORY
export async function updateCategory(id: string, data: CategoryInput) {
  const validation = categorySchema.safeParse(data);
  if (!validation.success) {
    return { success: false, error: "Validation false!" };
  }
  try {
    const result = await prisma.category.update({
      where: { id },
      data: validation.data,
    });
    revalidatePath("/categories");
    return { success: true, data: result };
  } catch (err) {
    console.error(err);
    return { success: false, error: "error in updating!" };
  }
}

//DELETE CATEGORY

export async function deleteCategory(id: string) {
  try {
    await prisma.category.delete({
      where: { id },
    });
    revalidatePath("/categories");
    return { success: true };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: "Errore in Delete!",
    };
  }
}

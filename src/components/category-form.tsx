"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "@prisma/client";

type Props = {
  category?: Category;
  onSuccess?: () => void;
};

export function CategoryForm({ category, onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CategoryInput>({
    resolver: zodResolver(categorySchema),
    defaultValues: category || { name: "", color: "#6366f1" },
  });

  const onSubmit = async (data: CategoryInput) => {
    const result = category
      ? await updateCategory(category.id, data)
      : await createCategory(data);

    if (result.success) {
      onSuccess?.();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Nome</label>
        <input
          {...register("name")}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Lavoro, Personale..."
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Colore</label>
        <input
          {...register("color")}
          type="color"
          className="w-full h-10 border rounded-md"
        />
        {errors.color && (
          <p className="text-red-600 text-sm mt-1">{errors.color.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Salvataggio..." : category ? "Aggiorna" : "Crea"}
      </button>
    </form>
  );
}

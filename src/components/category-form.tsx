"use client";

import { useForm } from "react-hook-form";
import { CategoryInput, categorySchema } from "../lib/validations";
import { createCategory } from "../actions/category-actions";
import { zodResolver } from "@hookform/resolvers/zod";

export function CategoryForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CategoryInput>({
    resolver: zodResolver(categorySchema),
    defaultValues: { color: "#331255" },
    mode: "onSubmit",
  });

  async function handleFunc(data: CategoryInput) {
    await new Promise((res) => setTimeout(res, 2000));
    const res = await createCategory(data);
    if (!res.success) {
      alert(res.error);
      return;
    }
    reset();
    console.log(res.data);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleFunc)}>
      <div>
        <label className="block text-sm font-medium mb-1">Nome</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Lavoro, Personale..."
          {...register("name")}
        />
        {errors.name && (
          <p
            className="text-red-500 font-light
          uppercase
           text-sm mt-2 "
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Colore</label>
        <input
          type="color"
          className="w-full h-10 border rounded-md"
          {...register("color")}
        />
        {errors.color && <p>{errors.color.message}</p>}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="uppercase w-full bg-blue-600 text-white py-2  rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:bg-red-500 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <p className="uppercase">is submitting...</p>
        ) : (
          <p className="uppercase">submit</p>
        )}
      </button>
    </form>
  );
}

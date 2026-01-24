"use client";

import { getCategories } from "../actions/category-actions";

type CategoriesProp = Awaited<ReturnType<typeof getCategories>>["data"];

export function CategoryListReadonly({
  categories,
}: {
  categories: CategoriesProp;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold mb-4">
        Le tue categorie ({categories.length})
      </h2>
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: cat.color }}
            />
            <div>
              <p className="font-medium">{cat.name}</p>
              {/* <p className="text-sm text-gray-500">{cat._count.notes} note</p> */}
            </div>
          </div>
        </div>
      ))}

      {/* {categories.length === 0 && (
        <p className="text-gray-500 text-center py-8">
          Nessuna categoria ancora
        </p>
      )} */}
    </div>
  );
}

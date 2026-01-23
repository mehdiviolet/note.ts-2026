// import { CategoryForm } from "@/components/category-form";
import { getCategories } from "@/src/actions/category-actions";
import { CategoryForm } from "@/src/components/category-form";
import { CategoryList } from "@/src/components/category-list";
import { Suspense } from "react";

export default function CategoriesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Categorie</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Nuova Categoria</h2>
          <div className="bg-white p-6 rounded-lg border">
            <CategoryForm />
          </div>
        </div>

        <Suspense fallback={<CategoryListSkeleton />}>
          <CategoryData />
        </Suspense>
      </div>
    </div>
  );
}

function CategoryListSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-12 bg-gray-200 rounded" />
      ))}
    </div>
  );
}

async function CategoryData() {
  // await new Promise((res) => setTimeout(res, 2000));
  const response = await getCategories();
  if (!response.success) return <p>Errore!</p>;

  return <CategoryList categories={response.data} />;
}

import { getCategories } from "@/src/actions/category-actions";
import { CategoryForm } from "@/src/components/category-form";
import { CategoryList } from "@/src/components/category-list";

export default async function CategoriesPage() {
  const response = await getCategories();
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

        <CategoryList
          categories={response.data}
          // renderActions = {()=> return "ok" ? null}
        />
      </div>
    </div>
  );
}

export function CategoryListSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-12 bg-gray-200 rounded" />
      ))}
    </div>
  );
}

// export async function CategoryData() {
//   const response = await getCategories();
//   if (!response.success) return <p>Errore!</p>;

//   return <CategoryList categories={response.data} />;
// }

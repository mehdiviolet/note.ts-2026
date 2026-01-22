import { useForm } from "react-hook-form";

export default async function CategoriesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Categorie:</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Nuova Categoria</h2>
          <div className="bg-white p-6 rounded-lg border">
            {/* <CategoryForm /> */}
          </div>
        </div>

        {/* Lista */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {/* Le tue categorie ({categories.length}) */}
          </h2>
          {/* <CategoryList categories={categories} /> */}
        </div>
      </div>
    </div>
  );
}

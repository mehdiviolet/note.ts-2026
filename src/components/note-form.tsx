// src/components/client/note-form.tsx
"use client";

import Link from "next/link";

export function NoteForm() {
  return (
    <form className="bg-white rounded-lg border p-8 space-y-6">
      {/* Titolo */}
      <div>
        <label className="block text-sm font-medium mb-2">Titolo *</label>
        <input
          type="text"
          placeholder="Inserisci il titolo..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Categoria */}
      <div>
        <label className="block text-sm font-medium mb-2">Categoria *</label>
        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
          <option value="">Seleziona categoria...</option>
          {/* {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))} */}
        </select>
        ...
      </div>
      {/* Contenuto */}
      <div>
        <label className="block text-sm font-medium mb-2">Contenuto *</label>
        <textarea
          rows={10}
          placeholder="Scrivi il contenuto della nota..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        ....
      </div>
      {/* Cover Image */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Cover Image (opzionale)
        </label>
        <input
          type="file"
          accept="image/*"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <p className="text-sm text-gray-500 mt-1">Formato: JPG, PNG, max 5MB</p>
      </div>
      {/* Root Error */}
      ...
      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Crea Nota
        </button>
        <Link
          href="/notes"
          className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100"
        >
          Annulla
        </Link>
      </div>
    </form>
  );
}

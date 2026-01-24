// app/notes/new/page.tsx
import { getCategories } from "@/src/actions/category-actions";
import { NoteForm } from "@/src/components/note-form";
import { NoteFormWrapper } from "@/src/components/note-form-wrapper";
import Link from "next/link";
import { Suspense } from "react";

export default function NewNotePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/notes"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Annulla
      </Link>

      <h1 className="text-3xl font-bold mb-8">Nuova Nota</h1>

      {/* Solo passa i dati al form */}
      <Suspense fallback={<p>Waiting...</p>}>
        <NoteFormWrapper />
      </Suspense>
    </div>
  );
}

import { getCategories } from "../actions/category-actions";
import { NoteForm } from "./note-form";

export async function NoteFormWrapper() {
  await new Promise((res) => setTimeout(res, 2000)); // test
  const response = await getCategories();

  return <NoteForm categories={response.data} />;
}

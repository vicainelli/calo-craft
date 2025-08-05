import { EntryForm } from "@/components/forms/entry-form";

export function App() {
  return (
    <div className="border p-8">
      <h1 className="text-3xl font-bold dark:text-gray-200">CaloCraft</h1>

      <EntryForm />
    </div>
  );
}

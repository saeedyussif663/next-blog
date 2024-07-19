"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ action }: { action: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-[#a3a3a3] w-full text-[#262626] py-2 border-none rounded-md uppercase"
      disabled={pending}
    >
      {pending
        ? action === "submit"
          ? "Creating..."
          : "Editing..."
        : action === "submit"
        ? "Create"
        : "Edit"}
    </button>
  );
}

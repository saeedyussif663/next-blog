"use client";
import { deleteBlog } from "@/actions";
import { useRouter } from "next/navigation";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function Actions({ id }: { id: string }) {
  const router = useRouter();
  return (
    <div className="flex gap-4 items-center justify-center">
      <CiEdit
        size={25}
        className="mt-2 cursor-pointer text-green-500"
        onClick={() => router.push(`/edit/${id}`)}
      />
      <MdDelete
        size={25}
        className="mt-2  cursor-pointer text-red-600"
        onClick={async () => {
          await deleteBlog(id);
          router.push("/");
        }}
      />
    </div>
  );
}

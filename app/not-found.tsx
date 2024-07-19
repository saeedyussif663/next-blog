import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-[50vh]">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="bg-[#E5E5E5] text-[#111111] px-2 py-1 rounded-md"
      >
        Return Home
      </Link>
    </div>
  );
}

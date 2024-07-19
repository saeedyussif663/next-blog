import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-16 w-full text-center text-gray-700 bg-gray-200 fixed bottom-0 z-50">
      <div>
        &copy; 2023 Copyright:
        <Link href="/" className="uppercase text-base hover:underline ml-1">
          Bloggg
        </Link>
      </div>
    </footer>
  );
}

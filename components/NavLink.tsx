"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-3 text-sm md:gap-4 md:text-lg">
      <li className={`${pathname === "/" && "underline"}`}>
        <Link href="/">Blogs</Link>
      </li>
      <li className={`${pathname === "/create" && "underline"}`}>
        <Link href="/create">Create Blogs</Link>
      </li>
    </ul>
  );
}

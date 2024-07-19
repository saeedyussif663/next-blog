import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full flex justify-between items-center h-16 bg-gray-200 px-8">
      <Link href="/" className="text-sm md:text-lg">
        BLOGGG
      </Link>

      <NavLink />
    </div>
  );
};

export default Header;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const cp = usePathname();
  return (
    <nav className="px-8 py-6">
      <ul className={`hidden sm:flex gap-6 justify-end capitalize`}>
        <li className="">
          <Link href={"/"}>home</Link>
        </li>
        <li className="">
          <Link href={"/pricing"}>pricing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

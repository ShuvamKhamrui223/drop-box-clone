"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants";
const Navbar = () => {
  const cp = usePathname();

  return (
    <nav className="px-8 py-6 flex items-center justify-end gap-5">
      <ul className={`hidden sm:flex gap-6 justify-end capitalize mr-5`}>
        {menuItems?.map(({ id, label, url, visibleToNonUser }) =>
          visibleToNonUser ? (
            <li
              key={id}
              className={`${cp === url ? "font-bold text-blue-400" : "font-normal"}`}
            >
              <Link href={url}>{label}</Link>
            </li>
          ) : null,
        )}
      </ul>

      <SignedOut>
        <SignInButton oauthFlow="popup">
          <button className="capitalize cursor-pointer">sign in</button>
        </SignInButton>
        <SignUpButton oauthFlow="popup">
          <button className="bg-blue-500 text-white rounded font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer active:scale-90 duration-100 transition-transform">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default Navbar;

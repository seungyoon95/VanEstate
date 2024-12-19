"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="w-full max-w-[1920px] flex justify-between items-center mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Van</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <ul className="flex gap-4">
          <Link href="/browse">
            <li className="hidden md:inline text-slate-400 hover:text-slate-800">
              Browse
            </li>
          </Link>
          <Link href="/create-listing">
            <li className="hidden md:inline text-slate-400 hover:text-slate-800">
              Create Listing
            </li>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <li className="hidden md:inline text-slate-400 hover:text-slate-800">
                Sign In
              </li>
            </Link>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
}

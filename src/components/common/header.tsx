"use client"
import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./navLink";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <nav className="container flex items-center justify-between py-4 px-2 lg:px-8 gap-4">
      <div className="">
        <NavLink
          href="/"
          className="text-2xl font-bold flex lg:flex-1 items-center group lg:gap-2"
        >
          <FileText className="group-hover:rotate-12 duration-200 ease-in-out text-gray-900" />
          <span className="text-gray-900"> Quick PDF</span>
        </NavLink>
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </SignedIn>
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        <SignedIn>
          <div className="flex items-center gap-2 lg:gap-4 ">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div className="">Pro</div>
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <div className="">
            <NavLink href="/sign-in">Sign In</NavLink>
            {/* <SignInButton mode="modal"/> */}
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}

import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./navLink";

export default function Header() {
  const isLoggedIn = false;
  return (
    <nav className="container flex items-center justify-between py-4 px-2 lg:px-8">
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
        {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        {isLoggedIn ? (
          <div className="">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div className="">Pro</div>
            <Button>User</Button>
          </div>
        ) : (
          <div className="">
            <NavLink href="/signin">Sign In</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

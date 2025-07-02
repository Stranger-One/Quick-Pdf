import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-16 sm:py-20 mx-auto text-center gap-y-6">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-transparent transition-colors duration-200 pointer-events-none"
          >
            <Sparkles className="h-6 w-6 mr-2 text-rose-600 group-hover:text-white duration-200 animate-pulse" />
            <p className="text-base text-rose-600 group-hover:text-white duration-200">
              Powered by AI
            </p>
          </Badge>
        </div>
        <h1 className="">
          Transfor PDFs into{" "}
          <span className="relative inline-flex items-center">
            <span className="relative z-10 px-2">concise</span>
            <span className="absolute left-0 right-0 top-0 -bottom-4 bg-rose-200/50 -rotate-2 rounded-md transform -skew-y-1"></span>
          </span>{" "}
          summary
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600">
          Get a beautiful summary reel of the document in a second.
        </h2>
        <Button
          variant={"link"}
          className=" transition-all rounded-full hover:no-underline text-slate-200 bg-gradient-to-r from-slate-900 to-rose-500 hover:bg-gradient-to-l duration-300 px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 shadow-lg hover:shadow-xl"
        >
          <Link href={"/#pricing"} className="flex items-center gap-x-2">
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Try Quick-PDF
            </span>
            <ArrowRight className="animate-pulse " />
          </Link>
        </Button>
      </div>
    </section>
  );
}

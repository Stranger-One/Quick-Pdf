import BgGradient from "@/components/common/bgGradient";
import { Badge } from "@/components/ui/badge";
import UploadForm from "@/components/upload/UploadForm";
import { Sparkle, Sparkles } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <section className="min-w-screen min-h-screen flex items-center justify-center">
      <BgGradient />
      <div className="max-w-6xl flex flex-col items-center justify-center space-y-5">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-transparent transition-colors duration-200 pointer-events-none"
          >
            <Sparkles className="h-6 w-6 mr-2 text-rose-600 group-hover:text-white duration-200 animate-pulse" />
            <p className="text-base text-rose-600 group-hover:text-white duration-200">
              AI-Powered cocntent creation
            </p>
          </Badge>
        </div>
        <div className="text-center space-y-10">
          <h1 className=" ">
            Start Uploading {" "}
            <span className="relative inline-flex items-center">
              <span className="relative z-10 px-2">Your PDF's</span>
              <span className="absolute left-0 right-0 top-0 -bottom-4 bg-rose-200/50 -rotate-2 rounded-md transform -skew-y-1"></span>
            </span>{" "}
          </h1>
          <p className="text-lg text-neutral-400">Upload your PDF and let our ai do the magic ✨</p>
        </div>
        <UploadForm/>
      </div>
    </section>
  );
};

export default page;

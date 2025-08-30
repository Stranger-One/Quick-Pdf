"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import z from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import toast from "react-hot-toast";

const fileSchema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine((file) => file.size <= 32 * 1024 * 1024, {
      message: "File size must be less than 32MB",
    }),
});

const UploadForm = () => {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("Upload complete");
      toast.success("Upload complete", { id: "upload" });
    },
    onUploadError: (error) => {
      console.error("Upload failed:", error);
      toast.error("Upload failed", { id: "upload" });
    },
    onUploadBegin: () => {
      console.log("Upload started");
      toast.loading("Uploading...", { id: "upload" });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;
    console.log(file);

    // validating th fields
    // schema with zod
    const validatedFields = fileSchema.safeParse({ file });
    console.log(validatedFields);
    if (!validatedFields.success) {
      console.log(validatedFields.error || "Invalid field");
      return;
    }

    // upload the file to uploadthing
    const res = await startUpload([file]);
    if (!res) return;

    // parse the pdf using lang chain
    // summerize the pdf using AI
    // save the summary to the database
    // redirect to [id] summary page
  };
  return (
    <form action="" onSubmit={handleSubmit} className="flex gap-4">
      <Input
        name="file"
        id="file"
        type="file"
        accept="application/pdf"
        required
        className="cursor-pointer"
      />
      <Button type="submit">Upload</Button>
    </form>
  );
};

export default UploadForm;

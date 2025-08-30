import { auth, currentUser } from "@clerk/nextjs/server";
import { createUploadthing, FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async ({ req }) => {
      const user = await currentUser();
      if (!user) throw new UploadThingError("User not authenticated");
    //   console.log("User:", user.id);

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
    //   console.log("Upload complete:", {
    //     userId: metadata.userId,
    //     file: file.ufsUrl,
    //   });

      return { userId: metadata.userId, file: file.ufsUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

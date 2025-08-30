import BgGradient from "@/components/common/bgGradient";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="">
        <BgGradient className="from-rose-400 via-rose-300 to-orange-200" />
        <SignIn />
      </div>
    </section>
  );
}

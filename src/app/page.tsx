import BgGradient from "@/components/common/bgGradient";
import HeroSection from "@/components/home/heroSection";
import DemoSection from "@/components/home/demoSection";
import HowItWorksSection from "@/components/home/howItWorks";
import PricingSection from "@/components/home/pricingSection";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
// or
export default async function Home() {
  const { userId } = await auth();
  console.log("userId", userId);
  
  return (
    <div className="relative w-full ">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
      </div>
      {/* <CTASection /> */}
    </div>
  );
}

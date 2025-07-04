import BgGradient from "@/components/common/bgGradient";
import HeroSection from "@/components/home/heroSection";
import DemoSection from "@/components/home/demoSection";
import HowItWorksSection from "@/components/home/howItWorks";
import PricingSection from "@/components/home/pricingSection";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="relative w-full ">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
      <HowItWorksSection />
      <PricingSection />


      </div>
      {/* <Button>hema vallika btn</Button> */}

      
      {/* <CTASection /> */}
    </div>
  );
}

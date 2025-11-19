import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}

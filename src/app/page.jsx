import CourseModules from "@/components/CourseModules";
import CourseTimelineSection from "@/components/CourseTimelineSection";
import FocusSupportSection from "@/components/FocusSupportSection";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FocusSupportSection />
      <CourseTimelineSection />
      <CourseModules />
      <TestimonialsSection />
      <Pricing />
    </div>
  );
}

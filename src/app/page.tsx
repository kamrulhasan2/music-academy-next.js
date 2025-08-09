import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import TestimonialCards from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96]">
        
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonialCards />
        <UpcomingWebinars />
    </main>
  );
}

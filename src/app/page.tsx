import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96]">
        
        <HeroSection />
        <FeaturedCourses />

    </main>
  );
}

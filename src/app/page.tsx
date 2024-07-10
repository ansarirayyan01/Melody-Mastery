import { FeaturedCourses } from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import { UpcomigWebinars } from "@/components/UpcomigWebinars";
import WhyCooseUs from "@/components/WhyCooseUs";

export default function Home(){
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <hr className="bg-gray-900"/>
      <FeaturedCourses />
      <hr className="bg-gray-900"/>
      <WhyCooseUs />
      <hr className="bg-gray-900 py-[-10]"/>
      <MusicSchoolTestimonials />
      <hr className="bg-gray-900 py-[-10]"/>
      <UpcomigWebinars />
      <hr className="bg-gray-900 py-[-10]"/>
      <Instructors />
      <hr className="bg-gray-900 py-[-10]"/>
      <Footer />
      
    </main>
  )
}
import Header from "@/components/Header";
import HeroSection from "@/components/section/Hero";
import YourHome from "@/components/section/YourHome";
import DreamHome from "@/components/section/DreamHome";
import Apartments from "@/components/section/Apartments";
import IdealPartner from "@/components/section/IdealPartner";
import Testimonial from "@/components/section/Testimonial";
import Faq from "@/components/section/Faq";
import Blog from "@/components/section/Blog";
import Footer from "@/components/section/Footer";
export default function Home() {
  return (
    <div
      className="min-h-screen bg-contain bg-secondary bg-center flex flex-col font-poppins"
      id="top"
    >
      <div className="relative flex flex-col items-center justify-center text-white w-full min-h-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-no-repeat bg-center md:min-h-auto lg:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0.2)] to-[rgba(32,32,32,0.7)] z-0" />
        <div className="relative z-10 w-full">
          <Header />
          <HeroSection />
        </div>
      </div>

      <main>
        <YourHome />
        <DreamHome />
        <Apartments />
        <IdealPartner />
        <Testimonial />
        <Faq />
        <Blog />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

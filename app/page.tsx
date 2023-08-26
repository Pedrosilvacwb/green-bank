import About from "@/components/About/About";
import FAQs from "@/components/FAQs/FAQs";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Payments from "@/components/Payments/Payments";
import Process from "@/components/Process/Process";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="text-white">
      <Header />
      <HeroSection />
      <About />
      <Features />
      <Process />
      <Payments />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  );
}

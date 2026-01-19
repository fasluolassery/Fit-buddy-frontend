import Features from "../components/Features";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";

export function LandingPage() {
  return (
    <div
      id="page-root"
      className="min-h-screen overflow-x-hidden bg-black text-white"
    >
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

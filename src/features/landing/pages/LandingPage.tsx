import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function FitBuddy() {
  const navigate = useNavigate();

  const selectRole = (role: "user" | "trainer") => {
    sessionStorage.setItem("signupRole", role);
    navigate("/signup", { state: { role } });
  };

  return (
    <div
      id="page-root"
      className="min-h-screen overflow-x-hidden bg-black text-white"
    >
      <Navbar selectRole={selectRole} />
      <Hero selectRole={selectRole} />
      <Features />
      <HowItWorks />
      <Pricing />
      <FinalCTA selectRole={selectRole} />
      <Footer />
    </div>
  );
}

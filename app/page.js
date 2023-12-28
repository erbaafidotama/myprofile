import Image from "next/image";

import Header from "@/components/header";
import WelcomeSection from "@/components/home/welcome";
import SkillSection from "@/components/home/skill";
import ExperienceSection from "@/components/home/experience";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeSection />
      {/* --------------------- */}
      <SkillSection />
      {/* -------------------------- */}
      <ExperienceSection />
      {/* ------------------------------ */}
      <Footer />
    </>
  );
}

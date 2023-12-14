import Image from "next/image";
import WelcomeSection from "@/app/components/home/welcome";
import SkillSection from "@/app/components/home/skill";
import ExperienceSection from "@/app/components/home/experience";
import Footer from "@/app/components/home/footer";

export default function Home() {
  return (
    <>
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

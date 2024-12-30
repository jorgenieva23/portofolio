import React from "react";
import {HeroSection} from "../../component/HeroSection/HeroSection";
import About from "../../component/About/About";
import { NavBar } from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
import ProjectsSection from "../../component/ProjectsSection/ProjectsSection";
import { useTheme } from "../../context/useTheme"

export const Home: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-zinc-800 text-white" : "bg-white text-black"}`}>
      <NavBar />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HeroSection />
        <ProjectsSection />
        <About />
      </div>
      <Footer />
    </div>
  );
};

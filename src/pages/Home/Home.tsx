import React from "react";
import { HeroSection } from "../../component/HeroSection/HeroSection";
import About from "../../component/About/About";
import { NavBar } from "../../component/NavBar/NavBar";
import { useTheme } from "../../context/ThemeContext";
import Footer from "../../component/Footer/Footer";
import ProjectsSection from "../../component/ProjectsSection/ProjectsSection";

export const Home: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`theme-transition ${theme === "dark" ? "bg-zinc-900" : ""}`}>
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

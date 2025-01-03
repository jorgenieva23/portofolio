import React from "react";
import image from "../../assets/Jorge2.jpeg";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { useTheme } from "../../context/useTheme"

export const HeroSection: React.FC = (): JSX.Element => {
  const { theme } = useTheme();
  const currentTheme = theme === "system" ? "light" : theme;

  const borderColor = currentTheme === "light" ? "rgb(59 130 246)" : "#ed8936";

  return (
    <section id="home" style={{ ["--border-color" as `--${string}`]: borderColor }}>
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-7 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className=" animacion rounded-full md:mt-2">
          <img
            src={image}
            alt=""
            width={325}
            height={325}
            className="rounded-full relative m-1 shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold md:mt-0 md:text-7xl">
            <span
              className={`${
                currentTheme === "dark"
                  ? "bg-gradient-to-r from-yellow-500 from-10% via-orange-500 via-70% to-amber-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
              }`}
            >
              ¡Hola! Soy Jorge,
            </span>
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            <span
              className={`${
                currentTheme === "dark"
                  ? "bg-gradient-to-r from-yellow-500 from-10% via-orange-500 via-70% to-amber-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
              }`}
            >
              Desarrollador Full Stack{" "}
            </span>
            con especialización en frontend, desde Tucuman, Argentina.
          </p>
          <Link
            to="projects"
            className={`text-neutral-100 font-semibold px-6 py-3 rounded shadow cursor-pointer ${
              currentTheme === "dark"
                ? "bg-gradient-to-r from-yellow-500 from-10% via-orange-500 to-amber-500"
                : "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600"
            }`}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Mis proyectos
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="cursor-pointer animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

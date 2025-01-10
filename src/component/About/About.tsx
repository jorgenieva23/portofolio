import React from "react";
import DownloadCV from "../DownloadCV/DownloadCV";
import { useTheme } from "../../context/ThemeContext";
import { techImages } from "./techImages";

const INVERT_IMAGES = ['Express.svg', 'GitHub.svg', 'Astro.svg', 'Next.js.svg'];

const About: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  const shouldInvert = (imgSrc: string) => {
    return INVERT_IMAGES.some(name => imgSrc.includes(name));
  };

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr
            className={`w-6 h-1 mx-auto my-4 border-0 rounded ${
              theme === "dark" ? "bg-orange-500" : "bg-blue-500"
            }`}
          />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              ¡Conóceme!
            </h1>
            <p>Hola! 👋🏻</p>
            <p>
              ¿Tienes desafíos de desarrollo web que requieren{" "}
              <span
                className={`font-bold ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                soluciones rápidas y efectivas
              </span>
              ? Estoy aquí para ayudarte.
            </p>
            <br />
            <p>
              Soy{" "}
              <span
                className={`font-bold ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                Jorge Nieva
              </span>
              , un{" "}
              <span
                className={`font-bold ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                desarrollador web Full Stack
              </span>{" "}
              con 2 años de experiencia en tecnologías clave como React,
              Node.js, TypeScript y más. 💻
            </p>
            {/* <br /> */}
            {/* <p>
              Me especializo en garantizar que tu sitio web{" "}
              <span
                className={`font-bold ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                funcione correctamente y que tu proyecto sea un éxito
              </span>
              . Puedo transformar tus ideas en soluciones escalables y
              personalizadas.
            </p> */}
            <br />
            <p>
              Mi compromiso es{" "}
              <span
                className={`font-bold ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                ayudarte a alcanzar tus objetivos
              </span>
              . Con mis conocimientos,{" "}
              <span
                className={`font-bold ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                garantizo soluciones efectivas y a medida{" "}
              </span>
              para tus necesidades.
            </p>
            <br />
            <p>
              Si necesitas un desarrollador comprometido con tu proyecto,
              <span
                className={`font-bold ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                ¡será un placer colaborar contigo!
              </span>
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis habilidades Tech</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {techImages.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Tech Icon ${index + 1}`}
                  className={`w-16 h-16 m-2 ${
                    theme === "dark" && shouldInvert(imgSrc) ? "dark:brightness-0 dark:invert" : ""
                  }`}
                />
              ))}
            </div>
            <div className="mt-6">
              <DownloadCV />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

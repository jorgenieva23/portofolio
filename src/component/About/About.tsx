import React from "react";
import DownloadCV from "../DownloadCV/DownloadCV";
import { useTheme } from "next-themes";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "SQL" },
  { skill: "PostgreSQL" },
  { skill: "Sequelize" },
  { skill: "MongoDB" },
  { skill: "Mongoose" },
  { skill: "Next.js" },
  { skill: "Vite" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Sass" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const About: React.FC = (): JSX.Element => {
  const { theme } = useTheme();
  const currentTheme = theme === "system" ? "light" : theme;
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr
            className={`w-6 h-1 mx-auto my-4border-0 rounded ${
              currentTheme === "dark" ? "bg-orange-500" : "bg-blue-500"
            }`}
          ></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              ¡Conóceme!
            </h1>
            <p>Hola! 👋🏻</p>
            <p>
              ¿Tienes problemas de desarrollo web que necesitan una{" "}
              <span
                className={`font-bold ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                solución rápida y eficiente
              </span>
              ? ¡Contáctame!
            </p>
            <br />
            <p>
              Soy{" "}
              <span
                className={`font-bold ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                Jorge Nieva
              </span>
              , tu{" "}
              <span
                className={`font-bold ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                desarrollador web FullStack
              </span>{" "}
              con 2 años de experiencia en tecnología. 💻
            </p>
            <br />
            <p>
              ¿Necesitas que tu sitio web funcione a la perfección? ¿Quieres que
              tu proyecto sea un{" "}
              <span
                className={`font-bold ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                éxito
              </span>
              ? ¡Estoy aquí para hacerlo realidad!
            </p>
            <br />
            <p>
              Mi objetivo es{" "}
              <span
                className={`font-bold ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                ayudarte a alcanzar tus metas y ambiciones
              </span>
              . Con mis conocimientos y habilidades,{" "}
              <span
                className={`font-bold ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                garantizo que tus ideas se transformen en soluciones efectivas y
                personalizadas
              </span>
              .
            </p>
            <br />
            <p>
              No pierdas más tiempo buscando. Si necesitas un desarrollador que{" "}
              <span
                className={`font-bold ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                }`}
              >
                se comprometa contigo y con tus proyectos
              </span>
              , ¡contáctame!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis habilidades Tech</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div className="py-6">
              <DownloadCV />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

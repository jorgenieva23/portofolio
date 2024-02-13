import React from "react";
import DownloadCV from "../DownloadCV/DownloadCV";
import { useTheme } from "next-themes";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Vue3.js" },
  { skill: "TypeScript" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "My SQL" },
  { skill: "PostgreSQL" },
  { skill: "Sequelize" },
  { skill: "MongoDB" },
  { skill: "Mongoose" },
  { skill: "Next.js" },
  { skill: "Vite" },
  { skill: "Tailwind CSS" },
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
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              ¡Conóceme!
            </h1>
            <p>
              Hola, mi nombre es Jorge y soy un Desarrollador Full Stack{" "}
              <span className="font-bold">{"ambicioso"}</span>,
              <span className="font-bold">{" auto motivado"}</span>, y{" "}
              <span className="font-bold">{"comprometido"}</span>, de Tucuman,
              Argentina.
            </p>
            <br />
            <p>
              Conclui un bootcamp de 6 meses de programacion Fullstack y hasta
              el día de hoy sigo actualizando mis habilidades y manteniendome al
              corriente de las nuevas actualizaciones tecnologicas
            </p>
            <br />
            <p>
              Estoy en busqueda de una oportunidad desafiante, donde pueda{" "}
              <span
                className={`font-bold ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-r bg-amber-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r bg-blue-500 bg-clip-text text-transparent"
                }`}
              >
                aplicar mis conocimientos y continuar aprendiendo
              </span>{" "}
              Estoy seguro de que mi experiencia y habilidades serían una
              valiosa contribución
            </p>
            <br />
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

import React from "react";
import SlideUp from "../SlideUp/SlideUp";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { useTheme } from "next-themes";

const projects = [
  {
    name: "JerjeGym",
    description:
      "JerjeGym es un sistema para la gestion y control de Gimnasios. El mismo cuenta con autenticacion de usuarios mediante email y password junto a roles y permisos. ABM de socios, promociones, cuotas, ingresos. Dashboard con estadísticas vitales para el control de sus respectivas funciones. Balance de ingresos diarios mediante graficos. Control de movimientos realizados por los usuarios.",
    image: project3,
    github: "https://github.com/jorgenieva23/Sist.Gym",
    link: "https://www.jerje.com.ar/",
  },
  {
    name: "ArbiTrack",
    description:
      "Colaboración clave en el desarrollo de la plataforma ArbiTrack en una startup emergente, enfocada en ofrecer servicios a arbitradores de criptomonedas. Durante los 6 meses de trabajo, fui responsable de implementar la lógica central de la aplicación, asegurar la coherencia visual y la usabilidad, así como gestionar bases de datos y desarrollar funcionalidades contables, contribuyendo de manera significativa al éxito de un proyecto real en el mercado de criptomonedas",
    image: project2,
    github: "https://github.com/geromedina/arbitrack",
    link: "https://www.arbitrack.com.ar/",
  },
  {
    name: "FromZeroToDev",
    description:
      "FromZeroToDev es una plataforma de comercio electrónico enfocada en cursos educativos de programación. Cuenta con funciones clave como autenticación, búsqueda, filtrados, clasificación, gestión de usuario, reseñas, envío de correo electrónico y pasarela de pago; Tecnologias usadas: TypeScript, Redux Toolkit, Tailwind, Node.js, MongoDB y Mongoose.",
    image: project1,
    github: "https://github.com/geromedina/FromZeroToDev",
    link: "https://from-zero-to-dev-posta.vercel.app/",
  },
  {
    name: "JournalApp",
    description:
      "Una aplicación frontend desarrollada con React para gestionar notas en un diario digital. focalizado en fortalecer el conocimiento en React, priorizando la implementación de componentes reutilizables, gestión de estado eficiente con Redux, y la integración de Firebase para autenticación segura. Los usuarios pueden registrarse e iniciar sesión fácilmente, enfocándose en la funcionalidad y robustez del código, más que en aspectos de diseño visual",
    image: project4,
    github: "https://github.com/jorgenieva23/JournalApp",
    link: "https://journal-app-nine-chi.vercel.app/",
  },
  {
    name: "Space X Clone",
    description:
      "Space X Clone es un proyecto de clonación de la página web de Space X para fortalecer habilidades en frontend. Utilize Astro como entorno principal, junto con HTML, JavaScript y Tailwindcss, para replicar la experiencia del sitio web de Space X y el desarrollo de interfaces interactivas.",
    image: project5,
  },
  {
    name: "Tesla Clone",
    description:
      "Tesla Clone es un proyecto de clonación de la página web de Tesla para fortalecer habilidades en frontend. Utilize Astro como entorno principal, junto con HTML, JavaScript y Tailwindcss, para replicar la experiencia del sitio web de Tesla y el desarrollo de interfaces interactivas.",
    image: project6,
  },
  //   {
  //     name: "PlatoIO",
  //     description: "PlatoIO is a to do list app that built using the PERN stack.",
  //     image: "/platoio.png",
  //     github: "https://github.com/hqasmei/platoio",
  //     link: "https://platoio.com/register",
  //   },
  //   {
  //     name: "Kator Family Photos",
  //     description:
  //       "Kator Family Photos is a photos and video digitization service in the LA area.",
  //     image: "/familyphotos.png",
  //     github: "https://github.com/hqasmei/katorfamilyphotos",
  //     link: "https://katorfamilyphotos.com/",
  //   },
];

const ProjectsSection: React.FC = (): JSX.Element => {
  const { theme } = useTheme();
  const currentTheme = theme === "system" ? "light" : theme;

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos 
        <hr
          className={`w-6 mt-2 h-1 mx-auto my-4border-0 rounded ${
            currentTheme === "dark" ? "bg-orange-500" : "bg-blue-500"
          }`}
        ></hr>
      </h1>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 w-full">
                  <article
                    className="relative mx-auto w-full max-w-lg shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 group"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                      backgroundPosition:
                        project.name === "JerjeGym"
                          ? "1%"
                          : project.name === "ArbiTrack"
                          ? "1% "
                          : "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>

                    <div className="relative bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                      <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        {project.name}
                      </h1>
                      <div
                        className={`w-16 h-2 ${
                          currentTheme === "dark"
                            ? "bg-gradient-to-r from-yellow-500 from-10% via-orange-500 to-amber-500"
                            : "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600"
                        }rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300`}
                      ></div>

                      <div className="relative max-h-20 overflow-hidden">
                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 group-hover:translate-y-[-75%] transition-transform duration-[7000ms] delay-[1500ms] ease-linear">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-row align-bottom space-x-4 pt-10 opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        {project.name !== "Space X Clone" &&
                          project.name !== "Tesla Clone" && (
                            <>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <BsGithub
                                  size={30}
                                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                                />
                              </a>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <BsArrowUpRightSquare
                                  size={30}
                                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                                />
                              </a>
                            </>
                          )}
                      </div>
                    </div>
                  </article>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

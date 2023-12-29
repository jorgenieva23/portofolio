import React from "react";
import SlideUp from "../SlideUp/SlideUp";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { useTheme } from "next-themes";

const projects = [
  {
    name: "Arbi'Track",
    description:
      "Participación integral en el desarrollo de la plataforma ArbiTrack, dedicada a brindar servicio a los arbitradores de criptomonedas, responsable de la implementación de la lógica de la aplicación, la coherencia visual, la usabilidad, la gestión de bases de datos y funcionalidades contables.",
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
        Projectos
        <hr
          className={`w-6 mt-2 h-1 mx-auto my-4border-0 rounded ${
            currentTheme === "dark" ? "bg-orange-500" : "bg-blue-500"
          }`}
        ></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl mt-16 shadow-xl hover:opacity-70"
                      />
                    </a>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
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
                    </div>
                  </div>
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

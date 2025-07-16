import React, { useState } from "react";
import SlideUp from "../SlideUp/SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import { projects } from "./projects";

const ProjectsSection: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos
        <hr
          className={`w-6 mt-2 h-1 mx-auto my-4 border-0 rounded ${
            theme === "dark" ? "bg-orange-500" : "bg-blue-500"
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
                    className="relative rounded-lg mx-auto w-full max-w-lg shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 group overflow-hidden"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                      backgroundPosition:
                        project.name === "JerjeGym"
                          ? "1%"
                          : project.name === "ArbiTrack"
                          ? "1%"
                          : "center",
                    }}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-300"></div>

                    <div className="relative bg-black bg-opacity-20 min-h-150 px-10 flex flex-col justify-end hover:bg-opacity-75 transform duration-300">
                      <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        {project.name}
                      </h1>
                      <div
                        className={`w-16 h-2 ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-yellow-500 from-10% via-orange-500 to-amber-500"
                            : "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600"
                        } rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300`}
                      ></div>

                      <div className="relative max-h-20 sx:max-h-32 overflow-hidden">
                        <p
                          className={`text-white text-xl transition-transform ${
                            hoveredIndex === idx
                              ? "opacity-80 translate-y-[-75%] duration-[9500ms] delay-[3000ms] ease-linear"
                              : "opacity-0 translate-y-0"
                          }`}
                        >
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-col align-bottom pt-3 opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        <div className="grid grid-cols-7 gap-4 lg:flex lg:flex-row">
                          {project.icons.map((IconComponent, i) => (
                            <IconComponent
                              key={i}
                              size={30}
                              className="text-white"
                            />
                          ))}
                        </div>
                        <div className="flex pt-2 space-x-4">
                          {project.github && (
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
                          )}
                          {project.link && (
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
                          )}
                        </div>
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

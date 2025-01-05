import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useTheme } from "../../context/ThemeContext";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inicio",
    page: "home",
  },
  {
    label: "Proyectos",
    page: "projects",
  },
  {
    label: "Sobre Mi",
    page: "about",
  },
];

export const NavBar: React.FC = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);

  return (
    <header
      className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow ${
        theme === "dark"
          ? "bg-zinc-900 border-b border-zinc-600"
          : "bg-white"
      }`}
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:center">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2
                  className={`text-2xl font-bold cursor-pointer ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Jorge Nieva
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center cursor-pointer justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={`block lg:inline-block ${
                      theme === "dark"
                        ? "text-neutral-100"
                        : "text-zinc-900"
                    } hover:text-neutral-500`}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {theme === "dark" ? (
                <button
                  onClick={toggleTheme}
                  className="h-5 w-5 text-orange-300"
                >
                  <RiSunLine size={25} color="light" />
                </button>
              ) : (
                <button
                  onClick={toggleTheme}
                  className="h-5 w-5 text-zinc-900"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

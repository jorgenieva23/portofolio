"use client"; // this is a client component
import React from "react";
import { HiArrowDown } from "react-icons/hi";
import pdf from "../../assets/Jorge Nieva CV.pdf";
import { useTheme } from "../../context/ThemeContext";

const DownloadCV: React.FC = (): JSX.Element => {
  const { theme } = useTheme();
  const getDownloadLink = () => {
    return pdf;
  };

  return (
    <span>
      <a
        href={getDownloadLink()}
        download
        className={`inline-block font-semibold px-4 py-3 rounded shadow cursor-pointer mt-5
        ${
          theme === "dark"
            ? "bg-gradient-to-r from-yellow-500 from-10% via-orange-500 to-amber-500 hover:from-yellow-600 hover:via-orange-600 hover:to-amber-600"
            : " bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-500 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-600"
        }`}
      >
        <HiArrowDown size={20} className="inline mr-2" />
        Descarga CV
      </a>
    </span>
  );
};

export default DownloadCV;

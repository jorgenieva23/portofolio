import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import project10 from "../../assets/project10.png";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiSequelize,
  SiJsonwebtokens,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiAstro,
  SiCss3,
  SiHtml5,
  SiSass,
  SiFirebase,
  SiAuth0,
  SiNextdotjs,
  SiVite,
  SiDocker,
  SiPython,
  SiVercel,
} from "react-icons/si";
import { LiaNode } from "react-icons/lia";

export const projects = [
  {
    name: "MaxPowerTech",
    description:
      "Sitio web institucional para un negocio dedicado a la reparación de celulares y venta de insumos. Desarrollado con foco en claridad, confianza y presencia online profesional.",
    image: project10,
    link: "https://www.maxpowertech.com.ar/",
    icons: [SiHtml5, SiCss3, SiJavascript, SiAstro, SiTailwindcss, SiVercel],
  },
  {
    name: "SmartRocks",
    description:
      "Participé en el mantenimiento e implementación de lógica en la plataforma SmartRocks, una herramienta especializada en el procesamiento y análisis digital de rocas en 2D y 3D. Realicé mejoras en funcionalidades existentes y aseguré la optimización de procesos clave, contribuyendo al desarrollo de soluciones utilizadas por profesionales en geología y exploración de recursos naturales.",
    image: project8,
    link: "https://smartrocks.com/",
    icons: [
      SiJavascript,
      SiPython,
      SiReact,
      SiMongodb,
      SiExpress,
      SiCss3,
      SiRedux,
      SiDocker,
    ],
  },
  {
    name: "Abi-Rached-Studios",
    description:
      "(En Desarrollo) Plataforma de gestión para un juego en línea que permite manejar tanto las cuentas de usuarios como los personajes asociados. Como desarrollador backend implemente una arquitectura MVC para que fuese escalable, un sistema de autenticación con JWT, recuperación de contraseñas y protección. Integré un sistema de notificaciones por correo electrónico y un enfoque de soft delete para mantener la integridad de los datos.",
    image: project7,
    icons: [
      LiaNode,
      SiExpress,
      SiSequelize,
      SiPostgresql,
      SiTypescript,
      SiJsonwebtokens,
    ],
  },
  {
    name: "JerjeGym",
    description:
      "JerjeGym es un sistema para la gestión y control de Gimnasios. El mismo cuenta con autenticación de usuarios mediante email y password junto a roles y permisos. ABM de socios, promociones, cuotas, ingresos. Dashboard con estadísticas vitales para el control de sus respectivas funciones. Balance de ingresos diarios mediante gráficos. Control de movimientos realizados por los usuarios.",
    image: project3,
    link: "https://sist-gym.vercel.app/",
    icons: [
      SiTypescript,
      SiReact,
      LiaNode,
      SiMongodb,
      SiJsonwebtokens,
      SiExpress,
      SiRedux,
      SiTailwindcss,
      SiVite,
    ],
  },
  {
    name: "ArbiTrack",
    description:
      "ArbiTrack en una startup emergente, enfocada en ofrecer servicios a arbitradores de criptomonedas. Durante los 6 meses de trabajo, fui responsable de implementar la lógica central de la aplicación, asegurar la coherencia visual y la usabilidad, así como gestionar bases de datos y desarrollar funcionalidades contables, contribuyendo de manera significativa al éxito de un proyecto real en el mercado de criptomonedas",
    image: project2,
    github: "https://github.com/geromedina/arbitrack",
    link: "https://www.arbitrack.com.ar/",
    icons: [
      SiJavascript,
      LiaNode,
      SiMongodb,
      SiJsonwebtokens,
      SiReact,
      SiExpress,
      SiRedux,
      SiTailwindcss,
      SiNextdotjs,
    ],
  },
  {
    name: "FromZeroToDev",
    description:
      "FromZeroToDev es una plataforma de comercio electrónico enfocada en cursos educativos de programación. Cuenta con funciones clave como autenticación, búsqueda, filtrados, clasificación, gestión de usuario, reseñas, envío de correo electrónico y pasarela de pago; Tecnologías usadas: TypeScript, Redux Toolkit, Tailwind, Node.js, MongoDB y Mongoose.",
    image: project1,
    github: "https://github.com/geromedina/FromZeroToDev",
    link: "https://from-zero-to-dev-posta.vercel.app/",
    icons: [
      SiTypescript,
      LiaNode,
      SiMongodb,
      SiAuth0,
      SiReact,
      SiExpress,
      SiRedux,
      SiTailwindcss,
      SiVite,
    ],
  },
  {
    name: "JournalApp",
    description:
      "Una aplicación frontend desarrollada con React para gestionar notas en un diario digital. focalizado en fortalecer el conocimiento en React, priorizando la implementación de componentes reutilizables, gestión de estado eficiente con Redux, y la integración de Firebase para autenticación segura. Los usuarios pueden registrarse e iniciar sesión fácilmente, enfocándose en la funcionalidad y robustez del código, más que en aspectos de diseño visual",
    image: project4,
    github: "https://github.com/jorgenieva23/JournalApp",
    link: "https://journal-app-nine-chi.vercel.app/",
    icons: [SiJavascript, SiFirebase, SiReact, SiRedux, SiSass, SiVite],
  },
  {
    name: "Space X Clone",
    description:
      "Space X Clone es un proyecto de clonación de la página web de Space X para fortalecer habilidades en frontend. Utilize Astro como entorno principal, junto con HTML, JavaScript y Tailwinds, para replicar la experiencia del sitio web de Space X y el desarrollo de interfaces interactivas.",
    image: project5,
    github: "https://github.com/jorgenieva23/SpacexClon",
    link: "https://spacex-clon.vercel.app/",
    icons: [SiJavascript, SiHtml5, SiTailwindcss, SiAstro],
  },
  {
    name: "Tesla Clone",
    description:
      "Tesla Clone es un proyecto de clonación de la página web de Tesla para fortalecer habilidades en frontend. Utilize Astro como entorno principal, junto con HTML, JavaScript y Tailwinds, para replicar la experiencia del sitio web de Tesla y el desarrollo de interfaces interactivas.",
    image: project6,
    github: "https://github.com/jorgenieva23/TeslaClon",
    link: "https://tesla-clon-delta.vercel.app/",
    icons: [SiJavascript, SiHtml5, SiCss3, SiAstro],
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

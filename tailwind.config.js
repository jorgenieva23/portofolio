/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      maxHeight: {
        116: "29rem",
        /*464px*/
        125: "31.25rem",
        /*500px*/
        140: "35rem",
        /*560px*/
        150: "37.5rem",
        /*600px*/
        190: "47.5rem",
        /*760px*/
      },
      height: {
        116: "29rem",
        /*464px*/
        125: "31.25rem",
        /*500px*/
        140: "35rem",
        /*560px*/
        150: "37.5rem",
        /*600px*/
        200: "50rem",
        /*800px*/
        250: "62.5rem",
        /*800px*/
      },
      minHeight: {
        18: "4.5rem",
        /*72*/
        33: "8.125rem",
        /*132px*/
        62: "15.5rem",
        /*248px*/
        96: "24rem",
        /*384px*/
        150: "37.5rem",
        /*600px*/
      },
      margin: {
        "-100%": "-100%",
      },
      screens: {
        sx: "320px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440pd",
      },
      animation: {
        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
      },
      transitionProperty: {
        theme: "background-color, border-color, color, fill, stroke",
      },
      transitionDuration: {
        theme: "300ms",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      filter: ["dark"],
    },
  },
};

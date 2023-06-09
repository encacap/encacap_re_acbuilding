/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        encacap: {
          blue: {
            light: "#8ECAE6",
            DEFAULT: "#219EBC",
            dark: "#023047",
          },
          main: "#F3C22C",
          secondary: "#4E4637",
          yellow: "#FFB703",
          facebook: "#1877f2",
          zalo: "#03a5fa",
          google: "#db4437",
        },
      },
      fontFamily: {
        sans: ["Gilroy", "Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        "video-reverse": "9/16",
      },
      borderWidth: {
        12: "12px",
      },
      boxShadow: {
        center: "0px 0px 24px -100px rgba(0, 0, 0, 0.05)",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

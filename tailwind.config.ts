import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary":"#489BFF",
        "white":"#FCFCFF",
        "whitebg":"#F6F5FA",
        "black":"#181B1D",
        "whitegray":"#B3C6DD",
        "gray":"#3A3F49",
        "darkgray":"#1E2022"
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
export default config;

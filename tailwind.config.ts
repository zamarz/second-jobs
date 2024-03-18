import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#386641",
        secondary: "#6a994e",
        tertiary: {
          dark: "#bc4749",
          light: "#f2e8cf",
          alt: "#FFE6A7",
        },
      },
    },
  },
  plugins: [],
};
export default config;

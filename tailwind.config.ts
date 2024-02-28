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
        primary: "#012a4a",
        secondary: "#a9d6e5",
        tertiary: {
          dark: "#231942",
          light: "#a9d6e5",
        },
      },
    },
  },
  plugins: [],
};
export default config;

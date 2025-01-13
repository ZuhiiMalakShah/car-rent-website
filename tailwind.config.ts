import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primaryColor: '#3563E9',
        backgroundCardColor: "#5CAFFC",
        selectionColor: '#3D5278',
        secondColor: '#90A3BF',
        bgPrimaryColor: '#F6F7F9',
      },
    },
  },
  plugins: [],
};
export default config;

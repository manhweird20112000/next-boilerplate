import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E6CAD9'
        },
        border: {
          primary: '#AAAAAA'
        }
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      'monument-extended': ['Monument Extended']
    }
  },
  plugins: [],
};
export default config;

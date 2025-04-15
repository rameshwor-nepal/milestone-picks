import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          1: '#011c13',
          2: '#044a32',
          3: '#7ADEA2',
          4: '#086e4b',
        },
        black: {
          1: '#000a07',
          2: '#121212',
          3: '#484748',
        },
        blue: {
          1: '#10141a',
          2: '#1F3646',
          3: '#27465c',
        },
        navy: {
          DEFAULT: '#0a1e3b',
          light: '#1e3a5f',
          dark: '#051025',
          lighter: "#e6eaf2"
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#e6c658',
          dark: '#b3901c',
          lighter: "#f5f0e1" // '#fff9e3'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ["Avenir", 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;

// color: #151240;
// font-family: "Avenir", sans-serif;
// font-size: 18px;

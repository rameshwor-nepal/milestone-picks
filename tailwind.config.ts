import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
          1: '#10141a'
        }
      },
    },
  },
  plugins: [],
};
export default config;

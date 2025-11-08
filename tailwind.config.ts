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
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EDEEFF',
          100: '#DBD9FF',
          200: '#BCB8FF',
          300: '#9C96FF',
          400: '#7D75FF',
          500: '#5D54FF',
          600: '#4F46E5',
          700: '#3730A3',
          800: '#2E1B77',
          900: '#1E123D',
        },
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all your files are scanned for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3490dc", // Example color
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#e3342f",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ffed4a",
          foreground: "#1a202c",
        },
        accent: {
          DEFAULT: "#9f7aea",
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};

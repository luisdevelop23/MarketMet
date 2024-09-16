/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-1": "var(--blue-1)",
        "blue-2": "var(--blue-2)",
        "blue-3": "var(--blue-3)",
        "blue-4": "var(--blue-4)",
        "gray-5": "var(--gray-5)",
        "gray-4": "var(--gray-4)",
        "gray-3": "var(--gray-3)",
        "gray-2": "var(--gray-2)",
        "gray-1": "var(--gray-1)",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};

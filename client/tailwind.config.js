/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1e293b",
        "primary-color-light": "#f8fafc",
      },
    },
  },
  plugins: [],
  "files.associations": {
    "*.css": "tailwindcss",
  },
  "editor.quickSuggestions": {
    strings: "on",
  },
  "tailwindCSS.includeLanguages": {
    plaintext: "html",
  },
};

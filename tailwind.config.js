// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // bright blue
        secondary: "#fbbf24", // golden yellow/orange
        accent: "#1e40af", // darker blue
        background: "#fef7ed", // warm cream/off-white
        text: "#1f2937", // dark gray/charcoal
      },
      fontFamily: {
        sans: ["'Open Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["'Poppins'", "'Inter'", "'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 
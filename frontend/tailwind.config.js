/*
 *
 * TODO: Configure your template paths
 * Add the paths to all of your template files in your tailwind.config.js file.
 *
 * Reference:
 * https://tailwindcss.com/docs/installation
 * https://tailwindcss.com/docs/configuration
 * https://www.preline.co/docs/index.html
 *
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("preline/plugin")],
};

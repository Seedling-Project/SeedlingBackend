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
module.exports = {
  content: [
      'node_modules/preline/dist/*.js', // preline
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('preline/plugin'),
  ],
}



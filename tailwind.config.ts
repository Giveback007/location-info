import type { Config } from "tailwindcss";

import tailwind from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'
import autoprefixer from 'autoprefixer'

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  variants: {
    extend: {},
  },

  theme: {
    extend: {}
  },

  plugins: [tailwind(tailwindConfig),autoprefixer],

} as Config;
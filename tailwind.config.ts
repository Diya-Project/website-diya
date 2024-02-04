import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        "blueDiya": "#00698f",
        "whiteDiya" : "#eefafa",
        "section1" : "#e3fcfc",
        "section2" : "#d4e8ff"
      },
      fontFamily:{
        "bree": ['Playfair Display', 'serif'],
        "lato":['Lato Special Elite', ...defaultTheme.fontFamily.sans],
        "Architects":['Architects Daughter','cursive']
      }
    },
  },
  plugins: [],
}
export default config

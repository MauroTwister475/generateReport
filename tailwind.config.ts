import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2688E6',
          blue_50: '#DCF1FC',
          shape: '#E8ECEE',
        }
      },
      textColor: {
        primary: {
          blue: '#2788E6'
        }
      }
    },
  },
  plugins: [],
}
export default config;

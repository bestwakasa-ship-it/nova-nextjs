import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:  '#04050a',
        deep:   '#080c18',
        navy:   '#0c1228',
        cyan:   '#00c8ff',
        jade:   '#00ffb3',
        gold:   '#c8a96e',
        'off-white': '#f0f2f8',
        gray:   '#8892a4',
        'light-gray': '#c5ccd8',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
        notoSerif: ['Noto Serif JP', 'serif'],
        notoSans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "Friends of Good Ideas" Palette
        ceramic: '#FAFAF9',  // Warm White (Background)
        charcoal: '#1C1917', // Warm Black (Text)
        stone: '#57534E',    // Warm Grey (Secondary)
        forest: '#0F766E',   // Brand Teal/Green (The "Future" layer)
        gold: '#D97706',     // Buttons
        sand: '#E7E5E4',     // Borders
        navy: '#0a192f',     // (Legacy support)
        teal: '#64ffda',     // (Legacy support)
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
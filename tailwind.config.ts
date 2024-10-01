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
        background: "#e3eaef",
        foreground: "#171717;",
        'blue-900': "#17192D",
        'blue-500': "#023B78",
        'blue-200': "#2188FF",
        'gray-950': "#24292F",
      },
      gridTemplateColumns: {
        'asset-panel': 'repeat(2, 336px)'
      },
      keyframes: {
        rotate90: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-90deg)' },
        },
        rotateBack: {
          '0%': { transform: 'rotate(-90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        rotate90: 'rotate90 0.3s ease-out forwards',
        rotateBack: 'rotateBack 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;

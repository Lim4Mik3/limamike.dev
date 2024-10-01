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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blue-900': "var(--blue-900)",
        'blue-500': "var(--blue-500)",
        'blue-200': "var(--blue-200)",
        'gray-950': "var(--gray-950)",
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

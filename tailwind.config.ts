// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Correct path for App Router
  ],
  theme: {
    extend: {
      colors: {
        'custom-tan': '#8b7355', // Add your custom color here
      },
    },
  },
  plugins: [],
};
export default config;
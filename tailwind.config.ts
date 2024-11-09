import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ['var(--font-dm-mono)'],
        circles: ['var(--font-charlottenburg-circles)'],
        lofi: ['var(--font-lofi-forest)'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["black"],
  },
};
export default config;
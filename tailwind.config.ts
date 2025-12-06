import type { Config } from "tailwindcss";
// @ts-ignore - daisyUI v5 plugin compatibility
import daisyui from 'daisyui';

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
        charlottenburg: ['var(--font-charlottenburg-classic)'],
        lofi: ['var(--font-lofi-forest)'],
      },
    },
  },
  plugins: [
    daisyui({
      themes: ["black"],
    }),
  ],
};
export default config;

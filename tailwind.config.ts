import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: {
        base: "#2BB32A",
        light: "#80CB86",
        dark: "#3D544D",
      },
      gray: "#ADB2B1",
      black: "#1A1E1C",
      white: "#FFFFFF",
      glass: "rgba(61, 84, 77, 0.24)",
    },
  },
  plugins: [],
};
export default config;

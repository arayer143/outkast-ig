import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        midnight: {
          50: "hsl(225, 30%, 95%)",
          100: "hsl(225, 30%, 90%)",
          200: "hsl(225, 30%, 80%)",
          300: "hsl(225, 30%, 70%)",
          400: "hsl(225, 30%, 50%)",
          500: "hsl(225, 35%, 35%)",
          600: "hsl(225, 40%, 25%)",
          700: "hsl(225, 40%, 20%)",
          800: "hsl(225, 40%, 15%)",
          900: "hsl(225, 40%, 10%)",
          950: "hsl(225, 40%, 5%)",
        },
        slate: {
          50: "hsl(210, 15%, 95%)",
          100: "hsl(210, 15%, 90%)",
          200: "hsl(210, 15%, 80%)",
          300: "hsl(210, 15%, 70%)",
          400: "hsl(210, 15%, 60%)",
          500: "hsl(210, 15%, 50%)",
          600: "hsl(210, 15%, 40%)",
          700: "hsl(210, 15%, 30%)",
          800: "hsl(210, 15%, 20%)",
          900: "hsl(210, 15%, 15%)",
          950: "hsl(210, 15%, 10%)",
        },
        charcoal: {
          50: "hsl(0, 0%, 95%)",
          100: "hsl(0, 0%, 90%)",
          200: "hsl(0, 0%, 80%)",
          300: "hsl(0, 0%, 70%)",
          400: "hsl(0, 0%, 60%)",
          500: "hsl(0, 0%, 50%)",
          600: "hsl(0, 0%, 40%)",
          700: "hsl(0, 0%, 30%)",
          800: "hsl(0, 0%, 20%)",
          900: "hsl(0, 0%, 15%)",
          950: "hsl(0, 0%, 10%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config

export default config


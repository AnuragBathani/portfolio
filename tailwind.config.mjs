/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08080a",
          900: "#0c0c0f",
          850: "#101014",
          800: "#141418",
          700: "#1b1b20",
          600: "#26262c",
          500: "#3a3a40",
          400: "#55555c",
          300: "#8a8a93",
          200: "#b8b8bf",
          100: "#e7e7ea",
        },
        // One restrained signal-amber accent — used sparingly (active nav,
        // link-hover underline, eyebrow tick, focus ring). CVE badge stays red.
        accent: {
          DEFAULT: "#d9a23f",
          soft: "#e7be6e",
          dim: "#9c7430",
        },
        // Secondary terminal-green — security/hacker flavor in coded spots only
        // (shell prompt, blinking cursor, status dot, skill-card terminal dots).
        // Amber remains the primary accent for links/UI.
        term: {
          DEFAULT: "#3ddc84",
          soft: "#6ef0a6",
          dim: "#1f8f54",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.25rem, 5vw, 4rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em" },
        ],
        "display-lg": [
          "clamp(1.75rem, 3.5vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "1.2", letterSpacing: "-0.015em" },
        ],
      },
      maxWidth: {
        container: "1080px",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
        expo: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      animation: {
        "fade-up": "fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

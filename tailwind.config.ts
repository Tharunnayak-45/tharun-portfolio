import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6366F1",
                secondary: "#8B5CF6",
                background: "#0F172A",
                foreground: "#F8FAFC",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            boxShadow: {
                glow: "0 0 20px rgba(99,102,241,0.5)",
            },
            animation: {
                float: "float 4s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(-12px)",
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;
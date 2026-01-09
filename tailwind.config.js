/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Semantic Map for Theme Switching

                // Backgrounds
                // dark.900 -> primary bg
                dark: {
                    900: 'rgb(var(--bg-primary-rgb) / <alpha-value>)',
                    800: 'rgb(var(--bg-secondary-rgb) / <alpha-value>)',
                },

                // Accents
                cyan: {
                    400: 'rgb(var(--accent-primary-rgb) / <alpha-value>)',
                },

                // Text Overrides
                // IMPORTANT: We map 'white' to --text-primary so that 'text-white' becomes BLACK in light mode
                white: 'rgb(var(--text-primary-rgb) / <alpha-value>)',

                // Map gray-400 to secondary text
                gray: {
                    100: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
                    200: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
                    300: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
                    400: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
                    500: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
                }
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e0f7ff',
                    100: '#b3ecff',
                    200: '#80dfff',
                    300: '#4dd2ff',
                    400: '#26c9ff',
                    500: '#00bfff',
                    600: '#00a3e0',
                    700: '#0080b3',
                    800: '#005f85',
                    900: '#003f58',
                },
                neon: {
                    cyan: '#00E5FF',
                    magenta: '#E040FB',
                    green: '#76FF03',
                    orange: '#FF9100',
                },
                corporate: {
                    blue: '#1a365d',
                    'blue-light': '#2a4a7f',
                    gold: '#c99a2e',
                    'gold-light': '#d4af37',
                    slate: '#64748b',
                    'slate-light': '#94a3b8',
                },
                dark: {
                    50: '#e8eaf0',
                    100: '#c5c8d6',
                    200: '#9ea3ba',
                    300: '#777e9e',
                    400: '#596289',
                    500: '#3b4674',
                    600: '#353f6c',
                    700: '#2d3561',
                    800: '#262c57',
                    900: '#191d44',
                    950: '#0a0e2a',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(0,229,255,0.3), 0 0 10px rgba(0,229,255,0.1)' },
                    '100%': { boxShadow: '0 0 20px rgba(0,229,255,0.5), 0 0 40px rgba(0,229,255,0.2)' },
                },
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #0a0e2a 0%, #191d44 30%, #0d1b3e 60%, #0a0e2a 100%)',
                'glass': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                'finance-gradient': 'linear-gradient(135deg, #191d44 0%, #1a365d 50%, #0a0e2a 100%)',
                'corporate-gradient': 'linear-gradient(135deg, #1a365d 0%, #0a0e2a 100%)',
            },
        },
    },
    plugins: [],
}

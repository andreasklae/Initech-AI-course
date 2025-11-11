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
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // AI-inspired colorful palette (Copilot/Apple Intelligence style)
        'ai-cyan': '#00D4FF',
        'ai-blue': '#0095FF',
        'ai-purple': '#7B61FF',
        'ai-magenta': '#E961FF',
        'ai-pink': '#FF6B9D',
        'ai-orange': '#FFB347',
      },
    },
  },
  plugins: [],
}


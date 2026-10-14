/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF7048',
          orangeDark: '#E8582F',
          orangeLight: '#FFF4F0',
          orangeSoft: '#FFEAE3',
          dark: '#151515',
          body: '#666666',
          muted: '#888888',
          lightBg: '#F8F8F8',
          cardBg: '#FFFFFF',
          border: '#ECECEC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 5px 15px -3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 8px 20px -4px rgba(0, 0, 0, 0.04)',
        'orange-glow': '0 20px 40px -10px rgba(255, 112, 72, 0.3)',
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '26px',
        '4xl': '32px'
      }
    },
  },
  plugins: [],
}

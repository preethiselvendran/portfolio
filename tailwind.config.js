/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      matangi: ['"Matangi", sans-serif'],
      michroma: ['"Michroma", sans-serif'],
    }, 
    screens: {
          sm: '340px',
          md: '540px',
          lg: '768px',
          xl: '1180px',
        },

        container: {
          center: true,
          padding: {
            DEFAULT: '12px',
            md: '32px',
          },
        },

    extend: {},
  },
  plugins: [],
}


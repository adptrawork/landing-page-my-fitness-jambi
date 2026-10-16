/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palet off-black + satu accent lime yang sudah didesaturasi (<80% saturasi).
        ink: '#11130F',
        'ink-2': '#33372D',
        paper: '#F6F6EF',
        haze: '#A3A79B',
        accent: '#CDE05A',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: ["./resources/**/*.{js,vue}"],
  blocklist: [
    'flex', 'inline-flex', 'inline', 'flex-shrink-0'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


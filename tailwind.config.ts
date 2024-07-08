const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinSlot: {
          "0%, 100%": { transform: "translateY(50%)" },
          "50%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        spinSlot: "spinSlot 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
export default config

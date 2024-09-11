/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/public/black.png')",
      },
      boxShadow: {
        neon: "0 0 10px #03e9f4, 0 0 15px #03e9f4, 0 0 25px #03e9f4, 0 0 100px #03e9f4",
      },

      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      variants: {
        extend: {
          backdropBlur: ["responsive"],
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".reflect-below": {
          "-webkit-box-reflect":
            "below 1px linear-gradient(transparent , #0005)",
        },
      });
    },
  ],
};

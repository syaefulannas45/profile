tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blues: {
          100: "#BE93C5",
          200: "#7BC6CC",
          300: "#E8CBC0",
          400: "#636FA4",
        },
        input: {
          100: "#ECEBEBCC",
          200: "#5F5353",
        },
        transparent: "transparent",
        background: {
          100: "#072852",
          200: "#153B6A",
          300: "#1E4D85",
        },
      },
      boxShadow: {
        custom: "1px 1px 1px 1px #d6d6d6",
        navbar: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)",
      },
      animation: {
        up: "up 10s ease-in-out infinite",
      },
      keyframes: {
        up: {
          "0%,100%": { transform: "rotate(15deg) origin-top-left" },
          "50%": { transform: "rotate(-15deg)" },
        },
      },
    },
  },
};

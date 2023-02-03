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
          400: "#E3E3E3",
          500: "#d6d6d6",
        },
      },
      boxShadow: {
        custom: "1px 1px 1px 1px #d6d6d6",
        navbar: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)",
      },
      animation: {
        up: "up 10s ease-in-out infinite",
        rotatetr: "rotatetr 1s ease-in-out 1",
        rotatetl: "rotatetl 1s ease-in-out 1",
        left: "left 1s ease-in-out 1",
      },
      keyframes: {
        up: {
          "0%,100%": { transform: "rotate(15deg) origin-top-left" },
          "50%": { transform: "rotate(-15deg)" },
        },
        rotatetr: {
          "0%": { transform: "rotate(360deg)" },
        },
        rotatetl: {
          "0%": { transform: "rotate(-360deg)" },
        },
        left: {
          "0%": { transform: "translatex(60px)" },
        },
      },
      screens: {
        mobile: { max: "391px" },
      },
    },
  },
};

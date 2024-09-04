module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        grey: {
          transparent: "#c0c0c04d",
          light: "#5f6368",
        },

        blue: {
          default: "#3d30f6;",
        },
        green:{
          deep: "#6BA10F",
          light: "#A9E338",
          faded: "#D5F68A"
        },

        black:{
          default: "#000000"
        }
      },
    },
  },
  plugins: [],
};

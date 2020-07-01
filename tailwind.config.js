const { colors, fontSize, screens } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: false,
  theme: {
    extend: {
      fontSize: {
        ...fontSize,
        "4xl": "2.15rem",
      },
      colors: {
        gray: {
          ...colors.gray,
          "800": "#262626",
        },
        yellow: {
          ...colors.yellow,
          "400": "#F5A623",
        },
        brands: {
          facebook: "#4267B2",
          instagram: "#E1306C",
        },
      },
      screens: {
        ...screens,
        xs: "380px",
      },
    },
  },
  variants: {},
  plugins: [],
}

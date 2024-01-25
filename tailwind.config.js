module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_image: "url('/heropage_wunderbar.png')",
        outro_image: "url('/outropage_wunderbar.png')",
        hero_image_mobile: "url('/heropage_mobile_best.png')",
      },
      fontFamily: {
        title: ["Gloria Hallelujah", "Helvetica"],
        body: ["Rubik", "Helvetica"],
      },
      fontSize: {
        mobile_body: ["13.5px", { lineHeight: "24px" }],
        mobile_title: "25px",
        bigscreen_body: "16.5px",
        bigscreen_title: ["40px", { lineHeight: "40px" }],
      },

      animation: {
        open_hamburgermenu: "open_hamburgermenu 300ms ease-in",
        closed_hamburgermenu: "closed_hamburgermenu 300ms ease-in",
      },
      keyframes: {
        open_hamburgermenu: {
          "0%": { right: "-144px" },
          "100%": { right: "0px" },
        },
        closed_hamburgermenu: {
          "0%": { right: "0px" },
          "100%": { right: "-144px" },
        },
      },
    },
  },
  plugins: [],
}



module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#176F6B",
          secondary: "#FFC000",
          accent: "#FFEDD5",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
      // "dark",
      {
        dark: {
          primary: "#D9F99D",
          secondary: "#FDE68A",
          accent: "#4B5563",
          neutral: "#F3F4F6",
          "base-100": "#1F2937",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
//           primary: "#570DF8",

//           secondary: "#F000B8",

//           accent: "#37CDBE",

//           neutral: "#3D4451",

//           "base-100": "#FFFFFF",

//           info: "#3ABFF8",

//           success: "#36D399",

//           warning: "#FBBD23",

//           error: "#F87272",
//         },
//       },
//     ],
//   },
//   plugins: [require("daisyui")],
// };

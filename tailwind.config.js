/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./app/**/*.{js,jsx,ts,tsx}"],
   presets: [require("nativewind/preset")],
   theme: {
      extend: {
         fontSize: {
            title: [
               "32px",
               {
                  fontWeight: "bold",
               },
            ],
            subtitle: [
               "24px",
               {
                  fontWeight: "bold",
               },
            ],
            "size-large": [
               "24px",
               {
                  fontWeight: "medium",
               },
            ],
            "size-medium": [
               "20px",
               {
                  fontWeight: "medium",
               },
            ],
            "size-small": [
               "16px",
               {
                  fontWeight: "medium",
               },
            ],
         },
         colors: {
            white: "#ffffff",
            base: "#3E3E3E",
            tertiary: "#B8B8B8",
            sub: "#EEEEEE",
            point: "#87A2FF",
            "point-medium": "#C4D7FF",
            "point-light": "#DEE6FF",
            muscles: "#FFD7C4",
            oxygen: "#F9E98C",
         },
      },
   },
};

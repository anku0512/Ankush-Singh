import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colorScheme: "light",
  primaryColor: "blue",
  defaultRadius: "md",
  primaryShade: 7,
  fontFamily: "Inter, Literata, Verdana, sans-serif",
  colors: {
    highlight: [
      "#5FCCDB",
      "#44CADC",
      "#2AC9DE",
      "#1AC2D9",
      "#11B7CD",
      "#09ADC3",
      "#0E99AC",
      "#e0e0e0",
      "#e9eff4",
      "#2C80FB", // used in highlighting things blue
    ],
    text: [
      "#173b6c",
      "#272829", // general text color
      "#149ddd", // this color is used for underline
      "#000", //color for subheading
    ],
  },
  // globalStyles: (theme) => ({
  //   ".mainHeading": {
  //     color: theme.colors.text[0],
  //     textDecoration: "underline",
  //     textDecorationThickness: "5px",
  //     textUnderlineOffset: "8px",
  //     textDecorationColor: theme.colors.text[2],
  //     paddingBottom: "0.5em",
  //   },
  // }),
});

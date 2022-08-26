import { extendTheme } from "native-base";

export const theme = extendTheme({
  color: {
    primary: {
      base: "#34344aff",
      secondary: "#44445F",
      primary: "#cc5a71ff",
      highlight: "#F6F740",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
  fontConfig: {
    Poppins: {
      300: {
        normal: "Poppins-Light",
        italic: "Poppins-LightItalic",
      },
      400: {
        normal: "Poppins-Regular",
        italic: "Poppins-Italic",
      },
      600: {
        normal: "Poppins-Medium",
        italic: "Poppins-MediumItalic",
      },
      700: {
        normal: "Poppins-Bold",
      },
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    mono: "Poppins",
  },
});

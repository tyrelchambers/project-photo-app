import React from "react";
import { NativeBaseProvider } from "native-base";
import { theme } from "./src/theme";
import { useFonts } from "expo-font";
import { Navigation } from "./src/components/Navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/Poppins/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/Poppins/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/Poppins/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  );
}

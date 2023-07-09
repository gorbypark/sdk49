import { NativeWindStyleSheet } from "nativewind";
import { Stack } from "expo-router";
import { useEffect } from "react";

import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

import { useColorScheme } from "react-native";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Layout = () => {
  const colorScheme = useColorScheme();
  useEffect(() => console.log(colorScheme), [colorScheme]);
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;

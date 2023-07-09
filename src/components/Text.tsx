import { PropsWithChildren, ReactNode } from "react";
import { Text as RNText, useColorScheme } from "react-native";

const Text = ({ children }: { children: ReactNode }) => {
  const isDark = useColorScheme() === "dark";
  return (
    <RNText style={{ color: isDark ? "white" : "black" }}>{children}</RNText>
  );
};

export default Text;

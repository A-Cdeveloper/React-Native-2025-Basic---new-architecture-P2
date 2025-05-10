import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React from "react";

import ThemeView from "./ThemeView";
import { Colors } from "../constants/colors";

const ThemeLoader = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  return (
    <ThemeView style={styles.container} safeArea>
      <ActivityIndicator color={theme.iconColor} size={"large"} />
    </ThemeView>
  );
};

export default ThemeLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

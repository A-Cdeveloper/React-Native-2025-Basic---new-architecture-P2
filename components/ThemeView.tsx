import React from "react";
import { StyleProp, View, ViewStyle, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemeView = ({
  children,
  style,
  safeArea = false,
  ...props
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  safeArea?: boolean;
  [key: string]: any;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  if (!safeArea) {
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props}>
        {children}
      </View>
    );
  }

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemeView;

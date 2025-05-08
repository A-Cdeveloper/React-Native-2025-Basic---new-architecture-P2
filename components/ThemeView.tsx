import React from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  useColorScheme,
} from "react-native";
import { Colors } from "../constants/colors";

const ThemeView = ({
  children,
  style,
  ...props
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  [key: string]: any;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemeView;

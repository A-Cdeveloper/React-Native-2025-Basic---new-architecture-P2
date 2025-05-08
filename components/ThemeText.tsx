import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

const ThemeText = ({
  children,
  style,
  title = false,
  ...props
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  title?: boolean;
  [key: string]: any;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  const textColor = title ? theme.title : theme.text;

  return (
    <Text style={[{ color: textColor }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemeText;

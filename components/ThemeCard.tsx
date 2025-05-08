import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  useColorScheme,
} from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

const ThemeCard = ({
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
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemeCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});

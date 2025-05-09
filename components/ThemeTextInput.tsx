import React from "react";
import { TextInput, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

const ThemeTextInput = ({ style, ...props }: { [key: string]: any }) => {
  const colorSheme = useColorScheme();
  const theme = Colors[colorSheme ?? "light"];

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 6,
        },
        style,
      ]}
      placeholderTextColor={theme.text}
      {...props}
    />
  );
};

export default ThemeTextInput;

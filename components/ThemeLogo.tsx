import React from "react";
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  useColorScheme,
} from "react-native";

import LogoDark from "../assets/img/logo_dark.png";
import LogoLight from "../assets/img/logo_light.png";

const ThemeLogo = ({
  style,
  ...props
}: {
  style?: StyleProp<ImageStyle>;
  [key: string]: any;
}) => {
  const colorScheme = useColorScheme();

  return (
    <Image
      source={colorScheme === "light" ? LogoLight : LogoDark}
      style={[styles.img, style]}
      {...props}
    />
  );
};

export default ThemeLogo;

const styles = StyleSheet.create({
  img: {
    width: 130,
    height: 130,
    marginVertical: 20,
  },
});

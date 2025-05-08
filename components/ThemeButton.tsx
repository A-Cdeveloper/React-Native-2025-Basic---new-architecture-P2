import {
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
  useColorScheme,
} from "react-native";
import { Colors } from "../constants/colors";
import ThemeText from "./ThemeText";

const ThemeButton = ({
  onPress,
  children,
  style,
}: {
  onPress: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      onPress={onPress}
      //   android_ripple={{ color: theme.iconColorFocused }}
      //   android_disableSound={false}
    >
      <ThemeText style={{ textAlign: "center", color: "#f2f2f2" }}>
        {children}
      </ThemeText>
    </Pressable>
  );
};

export default ThemeButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    minWidth: 150,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});

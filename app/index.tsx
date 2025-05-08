import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import ThemeLogo from "../components/ThemeLogo";
import ThemeView from "../components/ThemeView";
import Spacer from "../components/Spacer";
import ThemeText from "../components/ThemeText";

const HomeScreen = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemeLogo />
      <Spacer height={20} />
      <ThemeText style={styles.title} title>
        The Number 1
      </ThemeText>
      <Spacer height={10} />
      <ThemeText>Reading List app</ThemeText>
      <Spacer />
      <Link style={styles.link} href="/about">
        <ThemeText>About</ThemeText>
      </Link>
      <Link style={styles.link} href="/contact">
        <ThemeText>Contact</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  extraTitle: {
    color: "red",
  },
  link: {
    marginVertical: 5,
    borderBottomWidth: 1,
  },
});

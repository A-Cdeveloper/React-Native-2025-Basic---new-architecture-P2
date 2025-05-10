import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import ThemeLogo from "../components/ThemeLogo";
import ThemeText from "../components/ThemeText";
import ThemeView from "../components/ThemeView";

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
      {/*  */}
      <Link style={styles.link} href="/login">
        <ThemeText>Login Page</ThemeText>
      </Link>
      <Link style={styles.link} href="/register">
        <ThemeText>Register Page</ThemeText>
      </Link>
      <Link style={styles.link} href="/profile">
        <ThemeText>Profile</ThemeText>
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

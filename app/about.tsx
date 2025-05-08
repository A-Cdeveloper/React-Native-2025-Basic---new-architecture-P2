import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import ThemeText from "../components/ThemeText";
import ThemeView from "../components/ThemeView";
const AboutScreen = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemeText style={[styles.title]}>About Screen</ThemeText>
      <Link style={styles.link} href="/">
        <ThemeText>Homepage</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default AboutScreen;

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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});

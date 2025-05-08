import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";
const AboutScreen = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.title }]}>About Screen</Text>
      <Link style={styles.link} href="/">
        Homepage
      </Link>
    </View>
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

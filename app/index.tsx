import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/logo_light.png";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ fontSize: 15, fontWeight: "400", marginBlockStart: 10 }}>
        Reading List app
      </Text>
      <Link style={styles.link} href="/about">
        About
      </Link>
      <Link style={styles.link} href="/contact">
        Contact
      </Link>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 80,
    height: 80,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  extraTitle: {
    color: "red",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});

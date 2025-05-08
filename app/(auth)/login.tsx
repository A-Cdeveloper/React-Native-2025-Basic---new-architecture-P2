import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ThemeText from "../../components/ThemeText";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";

const LoginScreen = () => {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText style={styles.title} title>
        Login to Your Account
      </ThemeText>
      <Spacer height={20} />
      <Link href="/register">
        <ThemeText style={{ textAlign: "center" }}>
          Dont have an account? Register
        </ThemeText>
      </Link>
    </ThemeView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

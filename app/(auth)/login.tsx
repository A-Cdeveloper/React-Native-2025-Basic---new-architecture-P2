import { StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import ThemeText from "../../components/ThemeText";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/colors";
import ThemeButton from "../../components/ThemeButton";

const LoginScreen = () => {
  const handleSubmit = () => {
    console.log("Login");
  };

  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText style={styles.title} title>
        Login to Your Account
      </ThemeText>

      <ThemeButton onPress={handleSubmit}>Login</ThemeButton>

      <Spacer height={100} />
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
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

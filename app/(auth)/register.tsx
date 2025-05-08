import { StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import ThemeText from "../../components/ThemeText";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/colors";
import ThemeButton from "../../components/ThemeButton";

const RegisterScreen = () => {
  const handleSubmit = () => {
    console.log("Register");
  };

  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText style={styles.title} title>
        Register New Account
      </ThemeText>

      <ThemeButton onPress={handleSubmit}>Register</ThemeButton>

      <Spacer height={100} />
      <Link href="/login">
        <ThemeText style={{ textAlign: "center" }}>
          Have an account? Login
        </ThemeText>
      </Link>
    </ThemeView>
  );
};

export default RegisterScreen;

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

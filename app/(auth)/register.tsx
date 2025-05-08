import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ThemeText from "../../components/ThemeText";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";

const RegisterScreen = () => {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText style={styles.title} title>
        Create Your Account
      </ThemeText>
      <Spacer height={20} />
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
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

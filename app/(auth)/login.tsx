import { Link } from "expo-router";
import { useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Spacer from "../../components/Spacer";
import ThemeButton from "../../components/ThemeButton";
import ThemeText from "../../components/ThemeText";
import ThemeTextInput from "../../components/ThemeTextInput";
import ThemeView from "../../components/ThemeView";
import { useUserContext } from "../../context/userContext";
import { Colors } from "../../constants/colors";

const LoginScreen = () => {
  const { login } = useUserContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<null>(null);

  const handleSubmit = async () => {
    setError(null);
    try {
      await login(email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ThemeView style={styles.container}>
        <Spacer />
        <ThemeText style={styles.title} title>
          Login to Your Account
        </ThemeText>

        <ThemeTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Email"
          keyboardType="email-address"
          autoCorrect={false}
          onChangeText={setEmail}
          value={email}
        />

        <ThemeTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={setPassword}
          value={password}
        />

        <ThemeButton onPress={handleSubmit}>Login</ThemeButton>

        <Spacer height={20} />

        {error && <ThemeText style={[styles.error]}>{error}</ThemeText>}

        <Spacer height={100} />
        <Link href="/register">
          <ThemeText style={{ textAlign: "center" }}>
            Dont have an account? Register
          </ThemeText>
        </Link>
      </ThemeView>
    </TouchableWithoutFeedback>
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
  error: {
    color: Colors.warning,
    textAlign: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5c1c8",
    borderRadius: 6,
    borderWidth: 1,
    width: "80%",
    padding: 15,
    fontWeight: "bold",
  },
});

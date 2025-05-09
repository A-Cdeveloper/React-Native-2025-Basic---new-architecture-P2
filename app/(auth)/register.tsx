import { Link } from "expo-router";
import { useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Spacer from "../../components/Spacer";
import ThemeButton from "../../components/ThemeButton";
import ThemeText from "../../components/ThemeText";
import ThemeTextInput from "../../components/ThemeTextInput";
import ThemeView from "../../components/ThemeView";

const RegisterScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = () => {
    console.log("Register", email, password);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ThemeView style={styles.container}>
        <Spacer />
        <ThemeText style={styles.title} title>
          Register New Account
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

        <ThemeButton onPress={handleSubmit}>Register</ThemeButton>

        <Spacer height={100} />
        <Link href="/login">
          <ThemeText style={{ textAlign: "center" }}>
            Have an account? Login
          </ThemeText>
        </Link>
      </ThemeView>
    </TouchableWithoutFeedback>
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

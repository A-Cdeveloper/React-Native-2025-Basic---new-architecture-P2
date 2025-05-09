import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemeText";
import ThemedView from "../../components/ThemeView";

const Profile = () => {
  return (
    <ThemedView style={styles.container} safeArea>
      <ThemedText title={true} style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

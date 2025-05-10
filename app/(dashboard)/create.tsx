import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useRouter } from "expo-router";
import { use, useState } from "react";

// themed components

import Spacer from "../../components/Spacer";
import { useBooksContext } from "../../context/bookContext";
import ThemeView from "../../components/ThemeView";
import ThemeText from "../../components/ThemeText";
import ThemeTextInput from "../../components/ThemeTextInput";
import ThemeButton from "../../components/ThemeButton";
import { Colors } from "../../constants/colors";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { createBook } = useBooksContext();
  const router = useRouter();

  async function handleSubmit() {
    if (!title.trim() || !author.trim() || !description.trim()) {
      setError("All fields are required");
      return;
    }

    setError(null);
    setLoading(true);

    // create the book
    try {
      await createBook({ title, author, description });
    } catch (error: any) {
      setError(error.message);
    }

    // reset fields
    setTitle("");
    setAuthor("");
    setDescription("");

    // redirect
    router.replace("/books");

    // reset loading state
    setLoading(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemeView style={styles.container}>
        <ThemeText title={true} style={styles.heading}>
          Add a New Book
        </ThemeText>
        <Spacer />

        <ThemeTextInput
          style={styles.input}
          placeholder="Book Title"
          value={title}
          onChangeText={setTitle}
        />
        <Spacer height={10} />

        <ThemeTextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <Spacer height={10} />

        <ThemeTextInput
          style={styles.multiline}
          placeholder="Book Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Spacer />

        <ThemeButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: "#fff" }}>
            {loading ? "Saving..." : "Create Book"}
          </Text>
        </ThemeButton>
        <Spacer height={40} />
        {error && <ThemeText style={[styles.error]}>{error}</ThemeText>}
      </ThemeView>
    </TouchableWithoutFeedback>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: "stretch",
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: "stretch",
    marginHorizontal: 40,
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

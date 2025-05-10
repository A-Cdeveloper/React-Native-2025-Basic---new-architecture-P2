import { StyleSheet, FlatList, Pressable } from "react-native";

import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import ThemeView from "../../components/ThemeView";
import ThemeCard from "../../components/ThemeCard";
import { useBooksContext } from "../../context/bookContext";
import { Colors } from "../../constants/colors";

const Books = () => {
  const { books } = useBooksContext();

  if (!books.length) {
    return (
      <ThemeView style={styles.container} safeArea>
        <Spacer />
        <ThemeText title={true} style={styles.heading}>
          Your Reading List
        </ThemeText>
        <Spacer />
        <ThemeText style={{ textAlign: "center" }}>
          There are no books in your list
        </ThemeText>
      </ThemeView>
    );
  }

  return (
    <ThemeView style={styles.container} safeArea>
      <Spacer />
      <ThemeText title={true} style={styles.heading}>
        Your Reading List
      </ThemeText>

      <Spacer height={0} />
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable>
            <ThemeCard style={styles.card}>
              <ThemeText style={styles.title}>{item.title}</ThemeText>
              <ThemeText>Written by {item.author}</ThemeText>
            </ThemeCard>
          </Pressable>
        )}
      />
    </ThemeView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    marginTop: 40,
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

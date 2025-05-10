import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import ProtectedContent from "../../components/auth/ProtectedContent";
import { Colors } from "../../constants/colors";
import { useBooksContext } from "../../context/bookContext";

const DashboardLayout = () => {
  const colorSheme = useColorScheme();
  const theme = Colors[colorSheme ?? "light"];
  const { books } = useBooksContext();

  return (
    <ProtectedContent>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            //backgroundColor: "red",
            height: 90,
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
          tabBarLabelStyle: { fontSize: 13, fontWeight: "bold" },
          tabBarItemStyle: { marginVertical: 10 },
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={23}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="books"
          options={{
            title: `Books (${books.length})`,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={23}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "create" : "create-outline"}
                size={23}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </ProtectedContent>
  );
};

export default DashboardLayout;

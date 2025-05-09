import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const DashboardLayout = () => {
  const colorSheme = useColorScheme();
  const theme = Colors[colorSheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          // backgroundColor: "red",
          padding: 10,
          height: 80,
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
        tabBarLabelStyle: { fontSize: 13, fontWeight: "bold" },
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
          title: "Books",
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
  );
};

export default DashboardLayout;

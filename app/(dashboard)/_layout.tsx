import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/colors";

const DashboardLayout = () => {
  const colorSheme = useColorScheme();
  const theme = Colors[colorSheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          padding: 10,
          height: 90,
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="books" options={{ title: "Books" }} />
      <Tabs.Screen name="create" options={{ title: "Create" }} />
    </Tabs>
  );
};

export default DashboardLayout;

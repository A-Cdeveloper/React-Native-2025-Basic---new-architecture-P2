import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useUserContext } from "../../context/userContext";
import { Text } from "react-native";

type ProtectedProps = {
  children: React.ReactNode;
};

const ProtectedContent = ({ children }: ProtectedProps) => {
  const { isAuthenticated, user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && user === null) {
      router.replace("/login");
    }
  }, [isAuthenticated, user]);

  if (!isAuthenticated && !user) {
    return <Text>Loading...</Text>; // or loading spinner while redirecting
  }

  return <>{children}</>;
};

export default ProtectedContent;

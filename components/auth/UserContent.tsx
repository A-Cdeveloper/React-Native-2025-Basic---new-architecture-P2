import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import ThemeLoader from "../ThemeLoader";

type ProtectedProps = {
  children: React.ReactNode;
};

const UserContent = ({ children }: ProtectedProps) => {
  const { isAuthenticated, user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user !== null) {
      router.replace("/profile");
    }
  }, [isAuthenticated, user]);

  if (!isAuthenticated && user) {
    return <ThemeLoader />;
  }

  return <>{children}</>;
};

export default UserContent;

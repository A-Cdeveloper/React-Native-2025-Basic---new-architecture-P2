import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import ThemeLoader from "../ThemeLoader";

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
    return <ThemeLoader />; // or loading spinner while redirecting
  }

  return <>{children}</>;
};

export default ProtectedContent;

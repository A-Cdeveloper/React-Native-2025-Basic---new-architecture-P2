import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import UserContent from "../../components/auth/UserContent";
import { useUserContext } from "../../context/userContext";

const AuthLayout = () => {
  const { user, isAuthenticated } = useUserContext();
  console.log(user, isAuthenticated);
  return (
    <>
      <StatusBar style="auto" />
      <UserContent>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        />
      </UserContent>
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});

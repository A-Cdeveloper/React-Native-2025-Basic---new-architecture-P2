import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { useUserContext } from "../../context/userContext";

const AuthLayout = () => {
  const { user } = useUserContext();
  console.log(user);
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});

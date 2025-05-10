import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import UserContent from "../../components/auth/UserContent";

const AuthLayout = () => {
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

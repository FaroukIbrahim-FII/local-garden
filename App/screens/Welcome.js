import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import LoginSection from "../components/LoginSection";
import colors from "../config/colors";
import UpperWelcome from "../components/UpperWelcome";

function Welcome() {
  return (
    <KeyboardAvoidingView
      style={styles.loginKeyboard}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <UpperWelcome style={styles.logoSection} />
        <LoginSection style={styles.loginSection} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.background,
  },
  loginSection: {
    flex: 1.5,
  },
  loginKeyboard: {
    width: "100%",
    height: "100%",
  },
  logoSection: {
    flex: 1,
  },
});

export default Welcome;

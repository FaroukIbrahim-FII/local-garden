import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import colors from "../config/colors";

function LoginInputField({ label, style, ...otherProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.textInput, style]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  textInput: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.white,
    width: "100%",
    fontSize: 24,
    padding: 5,
  },
  label: {
    paddingLeft: 10,
    color: colors.textSecondary,
  },
});

export default LoginInputField;

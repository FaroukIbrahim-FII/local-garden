import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function AppButton({
  style,
  backgroundColor = colors.buttonPrimary,
  name,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, style, { backgroundColor }]}
      onPress={onPress}
    >
      <AppText style={styles.text}>{name}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 18,
  },
});

export default AppButton;

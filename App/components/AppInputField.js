import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";
import IconApp from "./Icon";

function AppInputField({ placeholder, icon, color, size, style }) {
  return (
    <View style={[styles.container, style]}>
      <IconApp icon={icon} color={color} size={size} style={styles.icon} />
      <TextInput placeholder={placeholder} style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 27,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 17,
    width: "100%",
  },
  icon: {
    padding: 5,
    paddingHorizontal: 10,
  },
});

export default AppInputField;

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import IconApp from "./Icon";

function AppButton({
  style,
  backgroundColor = colors.buttonPrimary,
  name,
  onPress,
  textStyle,
  icon,
  size,
  color,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, style, { backgroundColor }]}
      onPress={onPress}
    >
      <>
        {icon ? <IconApp icon={icon} size={size} color={color} /> : null}
        {name ? (
          <AppText style={[styles.text, textStyle]}>{name}</AppText>
        ) : null}
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
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

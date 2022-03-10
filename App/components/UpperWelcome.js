import React from "react";
import { View, StyleSheet } from "react-native";

import BG from "../assets/BG.svg";
import Logo from "../assets/Icon.svg";

function UpperWelcome({ style }) {
  return (
    <>
      <View style={[styles.logo, style]}>
        <Logo />
      </View>
      <BG style={styles.ellipse} />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 1,
  },
  ellipse: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default UpperWelcome;

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import DetailsSection from "../components/DetailsSection";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function DetailedScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/lettuceBig.png")} />
      <AppButton
        icon="chevron-left"
        backgroundColor="#C4C4C452"
        size={25}
        color={colors.textPrimary}
        style={styles.back}
      />
      <DetailsSection style={styles.detailsSection} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  detailsSection: {
    top: "-8%",
  },
  back: {
    position: "absolute",
    top: 50,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 20,
    zIndex: 10,
  },
});

export default DetailedScreen;

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import DetailsSection from "../components/DetailsSection";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

function DetailedScreen() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image source={require("../assets/lettuceBig.png")} />
      </View>
      <AppButton
        icon="chevron-left"
        backgroundColor="#C4C4C452"
        size={30}
        color={colors.textPrimary}
        style={styles.back}
        onPress={() => navigate("Home")}
      />
      <View style={styles.detailedContainer}>
        <DetailsSection style={styles.detailsSection} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsSection: {
    height: 300,
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
  upper: {
    flex: 1,
  },
  detailedContainer: {
    flex: 1.5,
  },
});

export default DetailedScreen;

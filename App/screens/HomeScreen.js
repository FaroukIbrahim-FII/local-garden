import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import VegeList from "../components/VegeList";
import colors from "../config/colors";
import AppInputField from "../components/AppInputField";
import FitlerList from "../components/FitlerList";
import VegeVec from "../assets/VegeVec.svg";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <VegeVec style={styles.vegeVec} />
      <View style={styles.upperDiv}>
        <AppText style={styles.text}>Vegetables</AppText>
        <AppInputField
          icon={"magnify"}
          size={20}
          placeholder={"Search"}
          style={styles.inputField}
        />
      </View>
      <FitlerList style={styles.filterOption} />
      <View style={styles.listDiv}>
        <VegeList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
    backgroundColor: colors.activeArea,
  },
  upperDiv: {
    justifyContent: "flex-end",
    flex: 0.6,
    marginTop: "8%",
    paddingHorizontal: "2%",
  },
  text: {
    color: colors.textPrimary,
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 41,
  },
  inputField: {
    marginTop: "5%",
  },
  filterOption: {
    marginTop: "5%",
  },
  vegeVec: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  listDiv: {
    flex: 2,
    paddingHorizontal: "2%",
  },
});

export default HomeScreen;

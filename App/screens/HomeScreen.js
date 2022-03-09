import React from "react";
import { View, StyleSheet, NativeModules, Platform } from "react-native";
import AppText from "../components/AppText";
import VegeList from "../components/VegeList";
import VegeListItem from "../components/VegeListItem";
import colors from "../config/colors";
import Screen from "../components/Screen";
import IconApp from "../components/Icon";
import AppInputField from "../components/AppInputField";
import FilterOption from "../components/FilterOption";
import FitlerList from "../components/FitlerList";
const { StatusBarManager } = NativeModules;

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.text}>Vegetables</AppText>
      <AppInputField
        icon={"magnify"}
        size={20}
        placeholder={"Search"}
        style={styles.inputField}
      />
      <FitlerList style={styles.filterOption} />
      <VegeList style={styles.list} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: "2%",
    // Platform.OS === "ios" ? 15 : 5,
    flex: 1,
    backgroundColor: colors.activeArea,
  },
  text: {
    top: "8%",
    color: colors.textPrimary,
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 41,
  },
  inputField: {
    top: "20%",
  },
  filterOption: {
    backgroundColor: "yellow",
    top: "10%",
  },
  list: {
    top: "12%",
  },
});

export default HomeScreen;

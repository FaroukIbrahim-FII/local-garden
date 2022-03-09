import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import IconApp from "./Icon";
import Screen from "./Screen";

function FilterOption({ style, selected = false, name }) {
  return (
    <View
      style={[
        styles.container,
        style,
        { backgroundColor: selected ? colors.selected : colors.white },
      ]}
    >
      {selected ? (
        <IconApp
          icon={"check"}
          style={styles.icon}
          color={colors.textSelected}
        />
      ) : null}

      <AppText
        style={[
          styles.text,
          { color: selected ? colors.textSelected : colors.textSecondary },
        ]}
      >
        {name}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 24,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 22,
  },
  icon: {
    paddingHorizontal: 5,
  },
});

export default FilterOption;

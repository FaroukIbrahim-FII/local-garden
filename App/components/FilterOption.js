import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import IconApp from "./Icon";

function FilterOption({ style, onPress, selected, name }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
    </TouchableWithoutFeedback>
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

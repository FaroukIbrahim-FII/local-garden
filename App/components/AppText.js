import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AppText({ children, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      <Text {...otherProps} style={style}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppText;

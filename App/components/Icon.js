import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import React from "react";
import { View, StyleSheet } from "react-native";

function IconApp({ icon, color, size, style }) {
  return (
    <View style={styles.container}>
      <Icon name={icon} color={color} size={size} style={style} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default IconApp;

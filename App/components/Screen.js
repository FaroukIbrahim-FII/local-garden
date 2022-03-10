import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  NativeModules,
} from "react-native";
const { StatusBarManager } = NativeModules;

const statusBarHeight =
  Platform.OS === "android"
    ? StatusBarManager.HEIGHT
    : StatusBarManager.getHeight((statusBarHeight) => statusBarHeight);

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;

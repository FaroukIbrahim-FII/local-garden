import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import LoginInputField from "../components/LoginInputField";
import LoginSection from "../components/LoginSection";
import colors from "../config/colors";
import Logo from "../components/Logo";
import Ellipse from "../components/Ellipse";

function Welcome(props) {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <LoginSection style={styles.loginSection} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  loginSection: {
    top: "22.8%",
  },
  logo: {
    top: "10%",
  },
});

export default Welcome;

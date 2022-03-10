import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";
import AppText from "./AppText";
import LoginInputField from "./LoginInputField";

function LoginSection({ style }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, style]}>
        <AppText style={styles.header}>Local Garden</AppText>
        <AppText style={styles.slogan}>
          Because you deserve to eat fresh
        </AppText>
        <LoginInputField label={"Email"} />
        <LoginInputField label={"Password"} secureTextEntry />
        <AppButton name={"LOGIN"} style={{ marginVertical: 20 }} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.activeArea,
    width: "100%",
    padding: 15,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    justifyContent: "center",
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    fontSize: 30,
    fontWeight: "700",
  },
  slogan: {
    alignItems: "center",
    color: colors.textSecondary,
    fontSize: 17,
    marginVertical: 5,
  },
});

export default LoginSection;

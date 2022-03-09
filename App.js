import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./App/screens/HomeScreen";
import Welcome from "./App/screens/Welcome";
import Screen from "./App/components/Screen";
import Icon from "./App/components/Icon";

export default function App() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

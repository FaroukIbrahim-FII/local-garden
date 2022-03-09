import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./App/screens/HomeScreen";
import Welcome from "./App/screens/Welcome";
import Screen from "./App/components/Screen";
import Icon from "./App/components/Icon";
import DetailedScreen from "./App/screens/DetailedScreen";

export default function App() {
  return <DetailedScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

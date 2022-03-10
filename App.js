import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./App/screens/HomeScreen";
import Welcome from "./App/screens/Welcome";
import Screen from "./App/components/Screen";
import Icon from "./App/components/Icon";
import DetailedScreen from "./App/screens/DetailedScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./App/navigations/HomeNavigation";
import theme from "./App/navigations/navigationTheme";
import "react-native-gesture-handler";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <HomeNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

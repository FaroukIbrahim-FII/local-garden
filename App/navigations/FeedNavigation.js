import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailedScreen from "../screens/DetailedScreen";

const Stack = createStackNavigator();
export default FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Detailed"
        component={DetailedScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  back: {
    top: 50,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 20,
    zIndex: 10,
  },
  header: {
    backgroundColor: "#E5C9B952",
    height: 0,
  },
});

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailedScreen from "../screens/DetailedScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import FeedNavigator from "./FeedNavigation";

const Tab = createBottomTabNavigator();
export default HomeNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon
            name="apps"
            color={colors.textPrimary}
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={DetailedScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon
            name="cart-outline"
            color={colors.textPrimary}
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="More"
      component={DetailedScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Icon
            name="dots-vertical"
            color={colors.textPrimary}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ProfileStackNav from "./profileStackNav";
import { connect } from "react-redux";
import "react-native-gesture-handler";
import StackNavigator from "./DrawerNavigator";
import { Ionicons } from "@expo/vector-icons";
import RestoTopTab from "./RestoTopTab";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import home from "../screens/home";
import DrawerNavigator from "../navigator/DrawerNavigator";

const Tab = createMaterialBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
              color = focused ? "#0078b0" : "#89a0ab";
            } else if (route.name === "Commercant") {
              iconName = focused ? "ios-restaurant" : "ios-restaurant";
              color = focused ? "#0078b0" : "#89a0ab";
            }
            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "#262626",

          tabStyle: {
            justifyContent: "center",
            backgroundColor: "white",
          },
        }}
        barStyle={{ backgroundColor: "white" }}
        labeled={false}
      >
        <Tab.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShow: true }}
        />
        <Tab.Screen
          name="Commercant"
          component={RestoTopTab}
          barStyle={{ backgroundColor: "#fff " }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsNavigator;

import React, { useEffect } from "react";
import "react-native-gesture-handler";
import profile from "../screens/ProfilCustomer/profile";
import setting from "../screens/ProfilCustomer/setting";
import Reservation from "../screens/ProfilCustomer/Reservation";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import ProfileProStack from "./profileProStack";
import RestoMap from "../screens/ProfilProfessionel/Map/RestoMap";
import { connect } from "react-redux";
import DrawerNavigator from "./DrawerNavigator";
const tabTop = createMaterialTopTabNavigator();

const RestoTopTab = (props) => {
  return (
    <tabTop.Navigator
      style={{ marginTop: Constants.statusBarHeight }}
      initialRouteName="List"
    >
      <tabTop.Screen name="List" component={ProfileProStack} />
      <tabTop.Screen name="Maps" component={RestoMap} />
    </tabTop.Navigator>
  );
};

export default RestoTopTab;

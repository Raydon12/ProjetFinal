import React from "react";
import "react-native-gesture-handler";
import profile from "../screens/ProfilCustomer/profile";
import setting from "../screens/ProfilCustomer/setting";
import Reservation from "../screens/ProfilCustomer/Reservation";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
const tabTop = createMaterialTopTabNavigator();
const ProfileStackNav = () => {
  return (
    <tabTop.Navigator
      style={{ marginTop: Constants.statusBarHeight }}
      initialRouteName="Profil"
    >
      <tabTop.Screen name="Profil" component={profile} />
      <tabTop.Screen name="Settings" component={setting} />
      <tabTop.Screen name="Reservation" component={Reservation} />
    </tabTop.Navigator>
  );
};
export default ProfileStackNav;

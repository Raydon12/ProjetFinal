import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilCommercant from "../screens/ProfilProfessionel/profilCommercant";
import ListPro from "../screens/ProfilProfessionel/ScreenList";
import RestoMap from "../screens/ProfilProfessionel/Map/RestoMap";
import { connect } from "react-redux";
import { ListAction } from "../../store/actions/ListAction";
import { useCallback } from "react";
import Home from "../screens/home";
const Stack = createStackNavigator();
const ProfileProStack = () => {
  return (
    <Stack.Navigator initialRouteName="Liste Commercant">
      <Stack.Screen
        name="Liste Commercant"
        component={ListPro}
        options={{ headerShown: false }}
        init
      />
      <Stack.Screen
        name="la"
        component={ProfilCommercant}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={RestoMap}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
// const mapDispatchToProps ={
//     ListAction connect(null,mapDispatchToProps)
// }
export default ProfileProStack;

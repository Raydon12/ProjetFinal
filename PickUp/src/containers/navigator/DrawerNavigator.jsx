import React, { useEffect } from "react";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import ProfileStackNav from "./profileStackNav";
import Reservation from "../screens/ProfilCustomer/Reservation";
import profile from "../screens/ProfilCustomer/profile";
import setting from "../screens/ProfilCustomer/setting";
import { connect } from "react-redux";
import AuthService from "../../services/AuthService";
import useAuth from "../../services/useAuth";
import ProfileProStack from "./profileProStack";
import profilCommercant from "../screens/ProfilProfessionel/profilCommercant";
import CustomDrawer from "../../components/Navigator/CustomDrawer";
const Stack = createDrawerNavigator();

const StackNavigator = (props) => {
  const { user } = useAuth();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      drawerPosition={"left"}
      drawerType={"front"}
      drawerStyle={{
        backgroundColor: "#fff",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Pro"
        component={profilCommercant}
        options={{ headerShown: true }}
        sty
      />
      <Stack.Screen
        name="Profil"
        component={profile}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Reservations" component={Reservation} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Deconnexion" component={setting} />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(StackNavigator);

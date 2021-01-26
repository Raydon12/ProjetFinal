import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AppScreen from "../AppScreen";
import DrawerComponent from "../DrawerComponent";
import useAuth from "../../services/useAuth";
import { connect } from "react-redux";
import { ImageAction } from "../../store/actions/ImageAction";

function CustomDrawer(props) {
  const { user } = useAuth();
  const { logOut } = useAuth();
  const defaultImg = "https://studyx.fr/images/photos/default.png";
  return (
    <AppScreen>
      <View style={styles.imageView}>
        {user && <Image style={styles.image} source={{ uri: user?.image }} />}
        {user?.image == "" && (
          <Image style={styles.image} source={{ uri: defaultImg }} />
        )}
        <Text>Prénom : {user?.firstName}</Text>
        <Text>Nom : {user?.lastName} </Text>
      </View>
      {user && (
        <DrawerComponent
          onPress={() => props.navigation.navigate("Profil")}
          style={[styles.container]}
          name={"Profil"}
          iconName={"account"}
          size={24}
          margin={10}
        />
      )}
      {user && (
        <DrawerComponent
          onPress={() => props.navigation.navigate("Reservations")}
          style={[styles.container]}
          name={"Reservations"}
          iconName={"ticket-account"}
          size={24}
          margin={10}
        />
      )}
      {!user && (
        <DrawerComponent
          onPress={() => props.navigation.navigate("Login")}
          style={[styles.container]}
          name={"Login"}
          iconName={"login"}
          size={24}
          margin={10}
        />
      )}
      {!user && (
        <DrawerComponent
          onPress={() => props.navigation.navigate("Register")}
          style={[styles.container]}
          name={"Register"}
          iconName={"account-key"}
          size={24}
          margin={10}
        />
      )}
      {user && (
        <DrawerComponent
          onPress={() => {
            logOut(), props.ImageAction(null);
          }}
          style={[styles.container]}
          name={"Deconnexion"}
          iconName={"logout"}
          size={24}
          margin={10}
        />
      )}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageView: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    margin: "auto",
  },
});
const mapStateToProps = (state) => ({
  img: state.image.image,
});
const mapDispatchToProps = {
  ImageAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);

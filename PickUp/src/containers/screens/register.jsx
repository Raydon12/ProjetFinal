import React, { useEffect, useState } from "react";
import Constant from "expo-constants";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import registerApi from "../../api/registerApi";
import AppForm from "../../components/AppForm";
import AppFormField from "../../components/Form/AppFormField";
import AppFormValidationButton from "../../components/Form/AppFormValidationButton";
import login from "../../api/login";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const RegisterScreen = (props) => {
  const { logIn } = useAuth();
  const register = registerApi;
  const [token, setToken] = useState();

  const onRegister = (value, token) => {
    console.log(token);
    register(value, token).then((data) =>
      data.status == 200
        ? (console.log(value, "je suis value"),
          login(value)
            .then((response) => response.json())
            .then((data) => {
              data.status == 404
                ? alert("Mauvais mot de passe ou Email")
                : (logIn(data), props.navigation.navigate("Home"));
            }))
        : alert("lalalalalaalal")
    );
  };

  const registerPushNotification = async () => {
    try {
      const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permissions.granted) return;
      const notificationsToken = await Notifications.getExpoPushTokenAsync();
      console.log(notificationsToken);
      setToken(notificationsToken);
    } catch (error) {
      console.log("Erreur vous n'avez pas accepter les notifications");
    }
  };

  useEffect(() => {
    registerPushNotification();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constant.statusBarHeight,
    },
    bigBlue: {
      color: "blue",
      fontWeight: "bold",
      fontSize: 30,
    },
    red: {
      color: "red",
    },
    view: {
      flex: 1,
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 20,
    },
    title: {
      flex: 0.1,
      alignContent: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    text: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Créer votre compte gratuitement</Text>
      </View>
      <View style={styles.view}>
        <AppForm
          initialValues={{
            nom: "",
            prenom: "",
            email: "",
            phoneNumber: "",
            password: "",
          }}
          onSubmit={(value) => {
            onRegister(value, token);
          }}
        >
          <AppFormField
            icon="people"
            name="nom"
            placeholder="Nom"
            autoCorrect={false}
          />
          <AppFormField
            icon="people"
            name="prenom"
            placeholder="Prenom"
            autoCorrect={false}
          />
          <AppFormField
            icon="phone"
            name="phoneNumber"
            placeholder="Numéro de téléphone"
            autoCorrect={false}
          />
          <AppFormField
            icon="email"
            name="email"
            placeholder="Email"
            autoCorrect={false}
          />
          <AppFormField
            icon="vpn-key"
            name="password"
            placeholder="Mot de passe"
            secureTextEntry
            textContentType="password"
            autoCorrect={false}
          />
          <AppFormValidationButton
            title={"ENREGISTRER"}
            width={250}
            height={40}
          />
        </AppForm>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

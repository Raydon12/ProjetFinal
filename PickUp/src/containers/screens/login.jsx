import * as React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Image } from "react-native";
import { actionLogin } from "../../store/actions/UserAction";
import { SafeAreaView } from "react-navigation";
import { ImageBackground } from "react-native";
import AppForm from "../../components/AppForm";
import AppFormField from "../../components/Form/AppFormField";
import AppFormValidationButton from "../../components/Form/AppFormValidationButton";
import login from "../../api/login";
import useAuth from "../../services/useAuth";
import * as yup from "yup";

const LoginScreen = (props) => {
  const { logIn } = useAuth();
  const onSubmit = (value) => {
    login(value)
      .then((response) => response.json())
      .then((data) => {
        data.status == 404
          ? alert("Mauvais mot de passe ou Email")
          : (logIn(data), props.navigation.navigate("Home"));
      })
      .catch((error) => console.log(error));
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("entrer un email valide")
      .required("Veuillez entrer un email"),

    password: yup
      .string()
      .min(5, "Mot de passe pas assez long")
      .required("veuillez entrer un mot de passe"),
  });

  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
      height: 50,
    },
    flex: {
      flex: 1,
    },
    red: {
      color: "red",
    },
    view: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 50,
    },
    test: {
      justifyContent: "center",
      alignItems: "center",
      flex: 0,
    },
    logo: {
      width: 300,
      height: 300,
    },
    form: {
      paddingHorizontal: 20,
      width: 100,
      color: "white",
      borderColor: "white",
      borderWidth: 1,
    },
  });
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.view}>
        <Image
          source={require("../../logo/logoPickUp.png")}
          style={{ width: "100%", flex: 0.4 }}
        ></Image>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            icon="email"
            name="email"
            autoCorrect={false}
            placeholder="Email"
            caretHidden={true}
          />
          <AppFormField
            icon="vpn-key"
            name="password"
            placeholder="Password"
            secureTextEntry
            caretHidden={true}
          />
          <AppFormValidationButton
            title={"Connexion"}
            width={250}
            height={40}
          />
        </AppForm>
        <Text>
          Pas encore de compte?
          <Text
            onPress={() => props.navigation.navigate("Register")}
            style={{ color: "blue" }}
          >
            {" "}
            Clique ICI
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = {
  actionLogin,
};

export default connect(null, mapDispatchToProps)(LoginScreen);

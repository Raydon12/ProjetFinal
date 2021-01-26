import {
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
} from "react-native";
import { connect } from "react-redux";
import React, { useContext, useEffect, useState } from "react";
import "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logOutAction } from "../../../store/actions/logOutAction";
import listPro from "../ProfilProfessionel/ScreenList";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import BaseUrl from "../../../api/client";
import useAuth from "../../../services/useAuth";
import AuthContext from "../../../services/context";
import ImageServices from "../../../services/ImageServices";
import { ImageAction } from "../../../store/actions/ImageAction";

const ProfileScreen = (props) => {
  const { setUser, user, updateUser } = useAuth();
  const { img, setImg } = useState();
  const defaultImg = "https://studyx.fr/images/photos/default.png";
  const Fetching = (data) => {
    fetch(BaseUrl + "/api/Customer/UpdateCustomer", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: user.token,
      },
      body: JSON.stringify({
        image: data[0].url,
        customerId: user.customerId,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const uploadImage = (image) => {
    const data = new FormData();
    data.append("images", {
      name: "image",
      type: "image/jpeg",
      uri: image.uri,
    });
    return fetchImgServ(data);
  };
  const fetchImgServ = (data) => {
    fetch("http://192.168.0.9:9000/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        Fetching(data);
        updateUser({ ...user, image: data[0].url });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.getCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Aie , Vous n avez pas accepter les trucs");
        }
      }
    };
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: false,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
    });
    uploadImage(result);

    if (!result.cancelled) {
      // setUser({ ...user, image: result.uri });
      setImg(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.5, alignItems: "center" }}>
        <TouchableOpacity onPress={pickImage}>
          {user?.image != "" && (
            <Image source={{ uri: user?.image }} style={styles.profilImage} />
          )}
          {user?.image == "" && (
            <Image style={styles.profilImage} source={{ uri: defaultImg }} />
          )}
        </TouchableOpacity>

        <Text style={{ fontWeight: "bold" }}>
          {user.firstName} {user.lastName}{" "}
          {console.log(user, "je suis user pour consolelog")}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  button: {
    borderRadius: 64,
    width: 200,
    height: 40,
    marginTop: 30,
    backgroundColor: "tomato",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
    shadowRadius: 2,
    shadowOpacity: 0.8,
  },
  profilImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  flex: {
    alignItems: "flex-end",
  },
});

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {
  ImageAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AuthContext, { ImageContext } from "./context";

export default ImageServices = () => {
  const { contextImage, setContextImage } = useContext(AuthContext);

  const setImg = (img) => {
    setContextImage(img);
  };
  const getImage = () => {
    return contextImage;
  };

  return { setImg, getImage };
};

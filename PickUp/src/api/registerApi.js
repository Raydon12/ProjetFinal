import React from "react";
import { View, StyleSheet } from "react-native";
import BaseUrl from "./client";

async function registerApi(value, notificationsToken) {
  console.log(notificationsToken.data, "je suis le notifi");
  return await fetch(BaseUrl + "/api/Customer/Register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lastName: value.nom,
      firstName: value.prenom,
      email: value.email,
      phoneNumber: value.phoneNumber.toString(),
      password: value.password,
      pushNotificationsToken: notificationsToken.data,
    }),
  });
}

export default registerApi;

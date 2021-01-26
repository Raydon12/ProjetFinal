import React from "react";
import { View, StyleSheet } from "react-native";
import BaseUrl from "./client";

async function login(value) {
  return await fetch(BaseUrl + "/api/Customer/Login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: value.email,
      password: value.password,
    }),
  });
}

export default login;

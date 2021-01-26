import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function AppFormValidationButton({ title, width, height }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      name={title}
      onPress={handleSubmit}
      width={width}
      height={height}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppFormValidationButton;

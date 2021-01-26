import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppDeleteSwipeable({ iconName, size, color, onPress }) {
  return (
    <View style={{ justifyContent: "center", paddingRight: 20 }}>
      <MaterialCommunityIcons
        name={iconName}
        size={size}
        color={color}
        onPress={onPress}
      ></MaterialCommunityIcons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppDeleteSwipeable;

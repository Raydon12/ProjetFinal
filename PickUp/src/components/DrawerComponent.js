import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import useAuth from "../services/useAuth";

function DrawerComponent({ onPress, style, name, iconName, size, margin }) {
  const { user } = useAuth();
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={style}>
        <MaterialCommunityIcons
          name={iconName}
          size={size}
          style={{ marginHorizontal: margin }}
        />
        <Text style={{ marginHorizontal: margin }}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DrawerComponent;

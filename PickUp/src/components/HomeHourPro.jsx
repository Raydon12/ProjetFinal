import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";
import { List } from "react-native-paper";
import { View } from "react-native";
import { Text } from "react-native";
import { connect } from "react-redux";
import BaseUrl from "../api/client";

const HomeHourPro = (props) => {
  const [homeList, SetHomeList] = useState([]);
  async function Fetching() {
    const URL = BaseUrl + "/api/User/ProEvent/";
    const reponse = await fetch(URL);
    const data = await reponse?.json();
    return SetHomeList(data);
  }
  const render = ({ item, index }) => (
    <ListItem
      key={index}
      bottomDivider
      onPress={() => {
        props.ProAction(item);
      }}
    >
      <Avatar source={{ uri: item.logo }} resizeMode="contain" />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "bold" }}>
          {item.name}
        </ListItem.Title>
        <ListItem.Subtitle>
          {item.description.length > 30
            ? item.description.substring(0, 30) + " (...)"
            : item.description}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron size={30} />
    </ListItem>
  );
  useEffect(() => {
    Fetching();
  }, []);
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
        Disponible dans l'heure
      </Text>
      <FlatList
        data={homeList}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={render}
      />
    </View>
  );
};
const mapStateToProps = (state) => ({
  state,
});
export default connect(mapStateToProps)(HomeHourPro);

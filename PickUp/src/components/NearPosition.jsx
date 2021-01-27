import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import BaseUrl from "../api/client";
import GetPosition from "./GetPosition";
import { connect } from "react-redux";
import { ProAction } from "../store/actions/ProAction";
import { ListAction } from "../store/actions/ListAction";
const NearPosition = (props) => {
  const position = GetPosition();
  const latitude = position.latitude;
  const longitude = position.longitude;

  const [list, setList] = useState([]);

  const Fletching = () => {
    fetch(BaseUrl + "/api/User")
      .then((response) => response?.json())
      .then((data) => {
        setList(data);
        props.ListAction(data);
      })
      .catch((error) => error);
  };
  const Test = ({ index, item }) => {
    // 0.20 lat 0.20 long /
    if (
      (item.latitude + 0.2 > latitude) &
      (item.latitude < latitude + 0.2) &
      ((item.longitude + 0.2 > longitude) & (item.longitude < longitude + 0.2))
    ) {
      return (
        <ListItem
          key={index}
          bottomDivider
          onPress={() => {
            props.ProAction(item);
            props.navigation.navigate("Pro");
          }}
        >
          <Avatar source={{ uri: item.logo }} resizeMode="contain" />
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "bold" }}>
              {item.userName}
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
    } else {
      return;
    }
  };

  useEffect(() => {
    Fletching();
  }, []);

  return (
    <View>
      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
        Près de chez vous
      </Text>
      <FlatList
        data={list}
        renderItem={Test}
        keyExtractor={(item) => item.userId.toString()}
        horizontal={true}
      ></FlatList>
    </View>
  );
};
const mapStateToProps = (state) => ({
  list: state.list.list,
});
const mapDispatchToProps = {
  ProAction,
  ListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NearPosition);

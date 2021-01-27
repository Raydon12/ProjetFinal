import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { ProAction } from "../store/actions/ProAction";
import { FlatList } from "react-native";
import { RefreshControl } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ListAction } from "../store/actions/ListAction";
import BaseUrl from "../api/client";
import { SafeAreaView } from "react-native";
import { View } from "react-native";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const DisplayProList = (props) => {
  const [refreshing, SetRefreshing] = useState(false);

  const Fletching = () => {
    fetch(BaseUrl + "/api/User")
      .then((response) => response?.json())
      .then((data) => props?.ListAction(data))
      .catch((error) => error);
  };
  const renderItem = ({ item, index }) => (
    <ListItem
      style={{
        borderBottomWidth: 0,
        shadowColor: "#000",
        marginBottom: 10,
        marginTop: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        maxHeight: 200,
        elevation: 3,
        overflow: "hidden",
        borderRadius: 35,
        borderBottomColor: "transparent",
      }}
      bottomDivider
      onPress={() => {
        props.navigation.navigate("la");
        props.ProAction(item);
      }}
    >
      <Avatar source={{ uri: item.logo }} resizeMode="contain" />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "bold" }}>
          {item.userName}
        </ListItem.Title>
        <ListItem.Subtitle style={{ maxHeight: 30 }}>
          {item.description.length > 30
            ? item.description.substring(0, 30) + " (...)"
            : item.description}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron size={30} />
    </ListItem>
  );
  useEffect(() => {
    Fletching();
  }, []);

  const onRefresh = useCallback(() => {
    SetRefreshing(true);
    wait(2000).then(() => SetRefreshing(false));
    Fletching();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 40,
          marginHorizontal: 20,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        horizontal={false}
        data={props.list}
        keyExtractor={(item) => item.userId.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => ({
  list: state.list.list,
});
const mapDispatchToProps = {
  ProAction,
  ListAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayProList);

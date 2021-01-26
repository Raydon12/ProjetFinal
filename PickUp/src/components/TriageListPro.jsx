import React, { useEffect } from "react";
import { View, Text, StyleSheet, RefreshControl } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";
import { CategoryAction } from "../store/actions/CategoryAction";
import { ListAction } from "../store/actions/ListAction";
import { connect } from "react-redux";
import BaseUrl from "../api/client";

const TriageListPro = (props) => {
  async function FlecthingTri(props) {
    const URL = BaseUrl + "/api/Category";
    const reponse = await fetch(URL);
    const data = await reponse?.json();
    return props.CategoryAction(data);
  }
  async function Triage([index, props]) {
    const i = index + 1;
    const url = BaseUrl + "/api/User/Category/";
    const response = await fetch(url + i.toString());
    const data = await response?.json();
    return props.ListAction(data);
  }
  const renderItem = ({ item, index }) => (
    <ListItem onPress={() => Triage([index, props])} key={index}>
      <ListItem.Content>
        <ListItem.Title style={{ color: "#2d88ff" }}>
          {item.name}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );

  useEffect(() => {
    FlecthingTri(props);
  }, []);

  return (
    <FlatList
      horizontal={true}
      data={props.listTri}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};
const mapStateToProps = (state) => ({
  listTri: state.list.listTri,
});
const mapDispatchToProps = {
  CategoryAction,
  ListAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(TriageListPro);

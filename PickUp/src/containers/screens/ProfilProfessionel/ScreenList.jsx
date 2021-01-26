import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import DisplayProList from "../../../components/DisplayProList";
import TriageListPro from "../../../components/TriageListPro";

const ListPro = (props) => {
  return (
    <View>
      <TriageListPro {...props}></TriageListPro>
      <DisplayProList {...props}></DisplayProList>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
  bold: {
    fontWeight: "bold",
    marginVertical: 10,
  },
});
const mapStateToProps = (state) => ({
  list: state.list.list,
  listTri: state.list.listTri,
});

export default connect(mapStateToProps)(ListPro);

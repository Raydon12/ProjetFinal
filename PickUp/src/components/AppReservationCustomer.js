import React from "react";
import { Image } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import moment from "moment";
import "moment/locale/fr";

function AppReservationCustomer({
  renderRightActions,
  restoName,
  reservationDate,
  nombreReserved,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.globalView}>
        <View style={styles.columnView}>
          <Text style={{ textAlign: "center" }}>{restoName}</Text>
          <Text>{moment(reservationDate).locale("fr").format("LLLL")}</Text>
          <Text>Nombre de place : {nombreReserved}</Text>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {},
  globalView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
  columnView: {
    flexDirection: "column",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default AppReservationCustomer;

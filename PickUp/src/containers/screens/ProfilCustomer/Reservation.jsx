import { View, Text, StyleSheet, Image, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListReservationAction } from "../../../store/actions/ListReservationAction";
import { ListItem, Avatar, Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "../../../services/useAuth";
import BaseUrl from "../../../api/client";
import AppReservationCustomer from "../../../components/AppReservationCustomer";
import AppDeleteSwipeable from "../../../components/AppDeleteSwipeable";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Reservation = (props) => {
  const { user } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const [netInfo, setNetInfo] = useState(null);
  const [listOffLine, setListOffLine] = useState(null);
  // recuperation de la liste de réservations
  function Fetch() {
    fetch(BaseUrl + "/api/Reservations/User/" + user.customerId)
      .then((response) => response.json())
      .then((data) => {
        props.ListReservationAction(data);
        storeData("res", data);
      })
      .catch((error) => console.log(error));
  }
  // Net info
  NetInfo.fetch().then((state) => {
    setNetInfo(state.isConnected);
  });
  // async storage
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getDate = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      setListOffLine(value);
    } catch (e) {
      console.log(e);
    }
  };
  // notifications
  async function sendPushNotification(
    expoPushToken,
    messageTitle,
    messageBody
  ) {
    const mess = {
      to: expoPushToken,
      sound: "default",
      title: messageTitle,
      body: messageBody,
      data: { data: "hello" },
    };
    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mess),
    });
  }
  // rafraichissement de page
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    const eo = getDate("res");
    wait(1000).then(() => setRefreshing(false));
    Fetch();
  }, []);
  // annulation des reservations
  const CancelReservation = (item) => {
    fetch(BaseUrl + "/api/Reservations/DeleteReservation", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: user.token,
      },
      body: JSON.stringify({
        reservationId: item.reservationId,
        customerId: user.customerId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        sendPushNotification(
          "ExponentPushToken[00EUvHIxGPX2sSW8zWRlx6]",
          "hello",
          "Khairul a rendez-vous mercredi"
        );
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    Fetch();
  }, []);
  const renderRightActions = (item) => {
    return (
      <AppDeleteSwipeable
        iconName={"delete"}
        size={32}
        onPress={() => CancelReservation(item)}
        color={"red"}
      ></AppDeleteSwipeable>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.flex}>
        <Text style={styles.title}>
          Voici les différentes réservations que vous avez effectuer{" "}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {netInfo != null
          ? props.reso.reserveUser?.map((item, index) => (
              <AppReservationCustomer
                key={index}
                renderRightActions={() => renderRightActions(item)}
                restoName={item.name}
                reservationDate={item.dateRes}
                nombreReserved={item.numPersonne}
              ></AppReservationCustomer>
            ))
          : listOffLine?.map((item, index) => (
              <AppReservationCustomer
                key={index}
                renderRightActions={renderRightActions}
                restoName={item.name}
                reservationDate={item.dateRes}
                nombreReserved={item.numPersonne}
              ></AppReservationCustomer>
            ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  flex: {
    flexDirection: "row",
  },
  reservation: {
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 50,
  },
  textReservation: {
    marginBottom: 10,
    textAlignVertical: "center",
  },
  button: {
    alignContent: "flex-end",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
  },
});
const mapStateToProps = (state) => ({
  user: state.user,
  reso: state.reservation,
  resto: state.pro,
});
const mapDispatchToProps = {
  ListReservationAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);

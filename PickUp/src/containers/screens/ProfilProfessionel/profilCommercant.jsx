import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { ReservationAction } from "../../../store/actions/ReservationAction";
import { StackActions } from "@react-navigation/native";
import { ImageAction } from "../../../store/actions/ImageAction";
import {
  Card,
  Avatar,
  Portal,
  Modal,
  Text,
  Button,
  Provider,
  TextInput,
} from "react-native-paper";

import { GetSlotAction } from "../../../store/actions/GetSlotAction";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import useAuth from "../../../services/useAuth";
import BaseUrl from "../../../api/client";
import colors from "../../../config/colors";
import { ImageBackground } from "react-native";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";

const Example = (props) => {
  const { user } = useAuth();
  const img = [];
  const [visible, SetVisible] = useState(false);
  const ShowModal = () => SetVisible(true);
  const HideModal = () => SetVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const [items, SetItems] = useState({}); // => push
  const today = new Date();
  const date = today.toISOString().split("T")[0];
  const [numPersonne, SetNumPersonne] = useState(1);
  const [id, setId] = useState(1);

  async function CheckDate(props) {
    const URL = BaseUrl + "/api/Reservations/All/Pro/" + props.list.id;
    const reponse = await fetch(URL);
    const data = await reponse.json();
    return props.GetSlotAction(data);
  }

  function GetDate() {
    const mappData = props.reservation.slot?.map((item) => {
      const NewDate = new Date(item.dateRes);
      const date = NewDate.toISOString().split("T")[0];
      return {
        ...item,
        dateRes: date,
      };
    });
    const reduced = mappData?.reduce((accumulator, currentItem) => {
      const { dateRes, ...reste } = currentItem;
      if (!accumulator[dateRes]) accumulator[dateRes] = [];
      accumulator[dateRes].push(reste);
      return accumulator;
    }, {});
    SetItems(reduced);
  }

  function onReservate() {
    fetch(BaseUrl + "/api/Reservations/PickReservation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: user.token,
      },
      body: JSON.stringify({
        userId: user.customerId,
        reservationId: id,
        dateInput: new Date(),
        numPersonne: numPersonne,
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        // data.status == 200
        //   ? alert("Reservation bien recue")
        //   : alert("Erreur, vous avez déja reserver pour ce créneau")
        console.log(data)
      )
      .then(props.navigation.dispatch(StackActions.popToTop()))
      .catch((error) => error);
  }

  // function CheckImage(props) {
  //   fetch(BaseUrl + "/api/Image/" + props.list.id)
  //     .then((reponse) => reponse.json())
  //     .then((data) => props.ImageAction(data));
  // }

  useEffect(() => {
    CheckDate(props);
  }, []);

  useEffect(() => {
    GetDate();
  }, [props.reservation.slot]);

  // props.lala.map((item) => img.push(item.image));
  return user != null ? (
    <Provider>
      <SafeAreaView style={styles.container}>
        {/* <ImageBackground
          source={{ uri: img[0] }}
          style={{ width: "100%", flex: 0.4 }}
        > */}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 29,
            flex: 0.2,
            marginTop: 10,
          }}
        >
          {props.list.name}
        </Text>
        {/* /</ImageBackground> */}
        <View style={{ flex: 1, width: "100%", height: "100%" }}>
          <Agenda
            items={items}
            selected={date}
            minDate={"2020-11-12"}
            maxDate={"2021-01-31"}
            pastScrollRange={3}
            futureScrollRange={3}
            renderEmptyDate={() => {
              return (
                <View>
                  <Text style={{ textAlign: "center" }}>
                    Aucunes dates de disponibles
                  </Text>
                </View>
              );
            }}
            renderEmptyData={() => {
              return (
                <View>
                  <Text>Aucunes dates de disponibles</Text>
                </View>
              );
            }}
            style={{}}
            renderItem={(item, firstItemInDay) => {
              {
                return (
                  <View>
                    <Card
                      style={{ marginBottom: 10 }}
                      onPress={() => {
                        setId(item.id);
                        ShowModal();
                      }}
                    >
                      <Card.Content
                        style={{
                          backgroundColor: colors.secondary,
                          borderRadius: 35,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: "transparent",
                          }}
                        >
                          <Text style={{}}>{item.heureDeb.slice(11, 16)}</Text>
                          <Text> {item.heureFin.slice(11, 16)}</Text>
                        </View>
                      </Card.Content>
                    </Card>
                  </View>
                );
              }
            }}
          />
        </View>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={HideModal}
            contentContainerStyle={containerStyle}
          >
            <TextInput
              label="Nombre de personne"
              value={numPersonne.toString()}
              onChangeText={(t) => SetNumPersonne(t)}
              mode={"outlined"}
              keyboardType={"number-pad"}
            ></TextInput>
            <Button
              mode={"outlined"}
              onPress={() => {
                onReservate();
                console.log();
              }}
            >
              Reserver
            </Button>
          </Modal>
        </Portal>
      </SafeAreaView>
    </Provider>
  ) : (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => props.navigation.navigate("Login")}>
        CONNECTER VOUS POUR RESERVER
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  allCenter: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  mtrois: {
    margin: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
  backgLogo: {
    backgroundColor: "#ffffff",
  },
  cardText: {
    height: "fit-content",
  },
});
const mapDispatchToProp = {
  ReservationAction,
  ImageAction,
  GetSlotAction,
};
const mapStateToProps = (state) => ({
  user: state.user,
  list: state.pro,
  reservation: state.reservation,
  lala: state.image.image,
});

export default connect(mapStateToProps, mapDispatchToProp)(Example);

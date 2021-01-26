import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import * as Location from "expo-location";
export default function GetPosition() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [position, setPosition] = useState([]);
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission refusée");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let text = "En attente..";

      const longitude = "";
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        setPosition(location.coords);
      }
    })();
  }, []);

  return position;
}

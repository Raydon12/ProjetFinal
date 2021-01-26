import React from "react";
import { View } from "react-native";
import HomeHourPro from "../../components/HomeHourPro";
import NearPosition from "../../components/NearPosition";
import useAuth from "../../services/useAuth";
import jwt_decode from "jwt-decode";

// {
//     //console.log(user.token);
//     console.log(
//       jwt_decode(
//         "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJMYXN0TmFtZSI6ImQiLCJGaXJzdE5hbWUiOiJkIiwiUGhvbmVOdW1iZXIiOiIxIiwiRW1haWwiOiJkQGQuZCIsIm5iZiI6MTYxMDAxNjQ4OSwiZXhwIjoxNjEwMTAyODg5fQ.ZfOCv5Kwxf2om0BZ3sgE9MllWwfbD6yDsU5QnpI9_rIi14IaPRBSYMoIqqUKiYp3YT6kdM2tMNF4y6_xObTbGg"
//       ),
//       "hello world"
//     );
//   }
// ICI POUR DECODER LE TOKEN

const Home = (props) => {
  return (
    <View>
      <View>
        <HomeHourPro />
        <NearPosition {...props} />
      </View>
    </View>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { View, ActivityIndicator } from "react-native";

import Navigator from "./Navigators";

const Main: React.FC = () => {
  const [loading, changeLoading] = useState(true);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Castoro: require("./Castoro-Regular.ttf"),
      Montserrat: require("./Montserrat-Medium.ttf"),
      Oleo: require("./OleoScript-Regular.ttf"),
    }).then(() => {
      changeLoading(false);
    });
  }, []);

  return loading ? (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <ActivityIndicator size="large" color="#7303fc" />
    </View>
  ) : (
    <Navigator />
  );
};

export { Main };

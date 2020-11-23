import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Navigator from "./Navigators";

const Main: React.FC = () => {
  const [loading, changeLoading] = useState(true);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    }).then(() => {
      changeLoading(false);
    });
  }, []);

  return loading ? <AppLoading /> : <Navigator />;
};

export { Main };

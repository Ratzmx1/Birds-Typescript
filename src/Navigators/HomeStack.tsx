import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { InitialState } from "../Redux/reduxIntefaces";

import Home from "../Components/Home";
import Bird from "../Components/Bird";

import { primary, secondary, textColor } from "../Extras/colors";

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  const dark = useSelector((state: InitialState) => state.theme.dark);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: secondary(dark) },
        headerTintColor: textColor(dark),
        cardStyle: { backgroundColor: primary(dark) },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bird" component={Bird} />
    </Stack.Navigator>
  );
};

export default HomeStack;

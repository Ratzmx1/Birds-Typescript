import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { InitialState } from "../Redux/reduxIntefaces";

import Search from "../Components/Search";

import { primary, secondary, textColor } from "../Extras/colors";

const Stack = createStackNavigator();

const SearchStack: React.FC = () => {
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
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchStack;

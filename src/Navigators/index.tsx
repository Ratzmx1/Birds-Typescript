import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "native-base";
import { Text } from "react-native";

import Home from "./HomeStack";
import Search from "./SearchStack";

import { changeTheme } from "../Redux/actionCreators";
import { InitialState } from "../Redux/reduxIntefaces";
import { primary, secondary, textColor } from "../Extras/colors";

const Drawer = createDrawerNavigator();

const customDrawer = (props, dispatch, dark) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Button
        onPress={() => {
          dispatch(changeTheme());
        }}
        style={{
          backgroundColor: secondary(dark),
          borderRadius: 5,
          marginLeft: 10,
          marginRight: 10,
        }}
        block
      >
        <Text style={{ color: textColor(dark) }}>Change theme</Text>
      </Button>
    </DrawerContentScrollView>
  );
};

const index: React.FC = () => {
  const dark = useSelector((state: InitialState) => state.theme.dark);

  const dispatch = useDispatch();
  return (
    <Drawer.Navigator
      drawerStyle={{ backgroundColor: primary(dark) }}
      drawerContentOptions={{
        activeBackgroundColor: secondary(dark),
        labelStyle: { color: textColor(dark) },
      }}
      drawerContent={(props) => customDrawer(props, dispatch, dark)}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Search} />
    </Drawer.Navigator>
  );
};

export default index;

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  PanResponder,
} from "react-native";
import { vmin, vh, vw } from "../../Extras/ViewPortUnits";

import { useNavigation, DrawerActions } from "@react-navigation/native";

import { InitialState, birdsData } from "../../Redux/reduxIntefaces";
import Bird from "./Bird";

import { textColor, secondary, primary } from "../../Extras/colors";

const Search: React.FC = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<birdsData[]>([]);
  const birds = useSelector((state: InitialState) => state.birds.birds);

  const theme = useSelector((state: InitialState) => state.theme.dark);
  const navigation = useNavigation();

  useEffect(() => {
    if (birds.length > 0 && input.length > 0) {
      setData(
        birds.filter((item) =>
          item.name.spanish.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setData([]);
    }
  }, [input]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: ({}, { dx }) => {
        if (dx > 85) {
          navigation.dispatch(DrawerActions.openDrawer());
        }
      },
    })
  );

  return (
    <ScrollView>
      <View
        style={{ minHeight: vh(93), backgroundColor: primary(theme) }}
        {...panResponder.current.panHandlers}
      >
        <TextInput
          style={{
            marginTop: vh(2.3),
            marginHorizontal: vw(10),
            marginBottom: vh(1.2),
            paddingHorizontal: vw(5),
            paddingVertical: vh(1),
            borderColor: "#0002",
            borderWidth: 1,
            borderRadius: 10,
            height: vh(5),
            backgroundColor: secondary(theme),
            color: textColor(theme),
            fontSize: vmin(3.5),
            fontFamily: "Montserrat",
          }}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        {data.map((bird) => {
          return (
            <TouchableOpacity
              key={bird.uid}
              onPress={() => {
                setInput("");
                navigation.navigate("Home", {
                  screen: "Bird",
                  params: { uid: bird.uid },
                });
              }}
            >
              <Bird
                bird={bird}
                text_color={textColor(theme)}
                bg_color={secondary(theme)}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Search;

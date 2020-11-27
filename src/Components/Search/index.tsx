import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { InitialState, birdsData } from "../../Redux/reduxIntefaces";
import Bird from "./Bird";

import { textColor, secondary } from "../../Extras/colors";

const Search: React.FC = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<birdsData[]>([]);
  const birds = useSelector((state: InitialState) => state.birds.birds);

  const theme = useSelector((state: InitialState) => state.theme.dark);
  const navigation = useNavigation();

  useEffect(() => {
    if (birds.length > 0 && input.length > 0) {
      const aux = birds.filter((item) =>
        item.name.spanish.toLowerCase().includes(input.toLowerCase())
      );
      setData(aux);
    } else {
      setData([]);
    }
  }, [input]);

  return (
    <ScrollView>
      <TextInput
        style={{
          marginTop: 20,
          marginHorizontal: 50,
          marginBottom: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderColor: "#0002",
          borderWidth: 1,
          borderRadius: 10,
          height: 45,
          backgroundColor: secondary(theme),
          color: textColor(theme),
          fontSize: 15,
        }}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      {data.map((bird) => {
        return (
          <TouchableOpacity
            key={bird.uid}
            onPress={() => {
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
    </ScrollView>
  );
};

export default Search;

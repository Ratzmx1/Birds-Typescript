import React from "react";
import { Image, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
// import { useNavigation } from "@react-navigation/native";

import Text from "../General/Texto";

import { birdsData, InitialState } from "../../Redux/reduxIntefaces";

import { secondary } from "../../Extras/colors";

const Bird: React.FC<{ bird: birdsData }> = ({ bird }) => {
  const theme = useSelector((state: InitialState) => state.theme.dark);
  return (
    <TouchableHighlight
      style={{
        backgroundColor: secondary(theme),
        margin: 14,
        borderRadius: 15,
        elevation: 1,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View>
          <Image
            source={{ uri: bird.images.main }}
            style={{
              width: 100,
              height: 100,
              left: 0,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              borderColor: "#0007",
              borderWidth: 0.1,
            }}
          />
        </View>

        <View
          style={{
            padding: 15,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>{bird.name.spanish}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export { Bird };

import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";

import { birdsData, InitialState } from "../../Redux/reduxIntefaces";
import { vmin } from "../../Extras/ViewPortUnits";
import { secondary } from "../../Extras/colors";
import Text from "../General/Texto";

const Bird: React.FC<{ bird: birdsData }> = ({ bird }) => {
  const theme = useSelector((state: InitialState) => state.theme.dark);

  const navigate = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: secondary(theme),
        margin: vmin(3.5),
        borderRadius: vmin(4),
        elevation: 1.2,
      }}
      onPress={() => {
        navigate.navigate("Bird", { uid: bird.uid });
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View>
          <Image
            source={{ uri: bird.images.main }}
            style={{
              width: vmin(25),
              height: vmin(25),
              borderTopLeftRadius: vmin(4),
              borderBottomLeftRadius: vmin(4),
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: vmin(5),
          }}
        >
          <Text
            style={{
              fontSize: vmin(4.1),
              fontFamily: "Montserrat",
            }}
          >
            {bird.name.spanish}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { Bird };

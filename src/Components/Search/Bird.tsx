import React from "react";
import { View, Text, Image } from "react-native";
import { birdsData } from "../../Redux/reduxIntefaces";
import { vmin, vh, vw } from "../../Extras/ViewPortUnits";

const Bird: React.FC<{
  bird: birdsData;
  text_color: string;
  bg_color: string;
}> = ({ text_color, bg_color, bird }) => {
  return (
    <View
      style={{
        marginHorizontal: vw(4),
        marginVertical: vh(1.1),
        borderColor: "#0002",
        borderWidth: 1,
        borderRadius: 15,
        padding: vmin(3.1),
        flex: 1,
        flexDirection: "row",
        backgroundColor: bg_color,
      }}
    >
      <Image
        source={{ uri: bird.images.main }}
        style={{
          width: vmin(10.6),
          height: vmin(10.6),
          borderRadius: vmin(10),
        }}
      />
      <View
        style={{
          marginLeft: vw(5),
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: vmin(3.5),
            fontFamily: "Montserrat",
            color: text_color,
          }}
        >
          {" "}
          {bird.name.spanish}{" "}
        </Text>
      </View>
    </View>
  );
};

export default Bird;

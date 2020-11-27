import React from "react";
import { View, Text, Image } from "react-native";
import { birdsData } from "../../Redux/reduxIntefaces";

const Bird: React.FC<{
  bird: birdsData;
  text_color: string;
  bg_color: string;
}> = ({ text_color, bg_color, bird }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: "#0002",
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        flex: 1,
        flexDirection: "row",
        backgroundColor: bg_color,
      }}
    >
      <Image
        source={{ uri: bird.images.main }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <View
        style={{
          marginLeft: 15,
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 17, color: text_color }}>
          {" "}
          {bird.name.spanish}{" "}
        </Text>
      </View>
    </View>
  );
};

export default Bird;

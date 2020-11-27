import React from "react";
import { TextStyle } from "react-native";
import Text from "../General/Texto";
const Title: React.FC<{ title: string; style?: TextStyle }> = ({
  title,
  style,
}) => {
  return (
    <Text
      style={{ fontSize: 30, fontFamily: "Oleo", marginLeft: 15, ...style }}
    >
      {title}
    </Text>
  );
};

export default Title;

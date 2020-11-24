import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";
import { useSelector } from "react-redux";
import { InitialState } from "../../Redux/reduxIntefaces";
import { textColor } from "../../Extras/colors";

const Texto: React.FC<{ style?: TextStyle }> = ({ children, style }) => {
  const theme = useSelector((state: InitialState) => state.theme.dark);
  return (
    <Text
      style={{
        ...style,
        color: textColor(theme),
      }}
    >
      {children}
    </Text>
  );
};

export default Texto;

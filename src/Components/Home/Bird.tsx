import React from "react";
import { View, Text } from "react-native";
import { Card } from "native-base";

import units from "../../Extras/ViewPortUnits";
import { birdsData } from "../../Redux/reduxIntefaces";

const Bird: React.FC<{ bird: birdsData }> = (props) => {
  const { vh } = units;
  return (
    <View style={{ marginTop: vh * 10 }}>
      <Card>
        <Text>{JSON.stringify(props)}</Text>
      </Card>
    </View>
  );
};

export { Bird };

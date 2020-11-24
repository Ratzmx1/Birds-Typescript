import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { Button, Container, Content, Text } from "native-base";

import { fetchBirds } from "../../Redux/actionCreators";

import { InitialState } from "../../Redux/reduxIntefaces";

// import { primary, secondary, textColor } from "../../Extras/colors";
// import { birdsData } from "../../Redux/reduxIntefaces";

import { Bird } from "./Bird";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const birds = useSelector((state: InitialState) => state.birds.birds);

  useEffect(() => {
    dispatch(fetchBirds());
  }, []);

  return (
    <View>
      <FlatList
        data={birds}
        renderItem={({ item }) => <Bird key={item.uid} bird={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Home;

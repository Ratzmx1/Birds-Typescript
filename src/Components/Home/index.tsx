import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchBirds } from "../../Redux/actionCreators";

import { InitialState } from "../../Redux/reduxIntefaces";

import { Bird } from "./Bird";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const birds = useSelector((state: InitialState) => state.birds.birds);

  useEffect(() => {
    dispatch(fetchBirds());
  }, []);

  return birds !== [] ? (
    <View>
      <FlatList
        data={birds}
        renderItem={({ item }) => <Bird key={item.uid} bird={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  ) : (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <ActivityIndicator size="large" color="#7303fc" />
    </View>
  );
};

export default Home;

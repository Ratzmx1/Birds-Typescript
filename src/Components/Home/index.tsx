import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchBirds } from "../../Redux/actionCreators";

import { InitialState } from "../../Redux/reduxIntefaces";

import { Bird } from "./Bird";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const birds = useSelector((state: InitialState) => state.birds.birds);

  const [selected, setSelected] = useState([]);
  const [index, setIndex] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchBirds());
  }, []);

  useEffect(() => {
    if (birds.length > 0) {
      if (birds.length > index * 10) {
        setSelected(selected.concat(birds.slice((index - 1) * 10, index * 10)));
      }
    }
  }, [birds, index]);

  return selected.length > 0 ? (
    <View>
      <FlatList
        data={selected}
        renderItem={({ item }) => <Bird key={item.uid} bird={item} />}
        keyExtractor={(item) => item.uid}
        onEndReached={() => setIndex(index + 1)}
        onEndReachedThreshold={0.3}
        initialNumToRender={10}
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

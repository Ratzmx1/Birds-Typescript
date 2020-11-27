import React, { useEffect, useState, useRef } from "react";
import { View, FlatList, ActivityIndicator, PanResponder } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchBirds } from "../../Redux/actionCreators";

import { InitialState } from "../../Redux/reduxIntefaces";

import { useNavigation, DrawerActions } from "@react-navigation/native";
import { vh } from "../../Extras/ViewPortUnits";

import { Bird } from "./Bird";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const birds = useSelector((state: InitialState) => state.birds.birds);

  const [selected, setSelected] = useState([]);
  const [index, setIndex] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

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

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: ({}, { dx }) => {
        if (dx > 85) {
          navigation.dispatch(DrawerActions.openDrawer());
        }
      },
    })
  );

  return selected.length > 0 ? (
    <View style={{ minHeight: vh(93) }} {...panResponder.current.panHandlers}>
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

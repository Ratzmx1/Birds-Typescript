import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../../Extras/baseUrl";

interface birdDetail {
  _links: { parent: string; self: string };
  audio: { author?: string; file?: string };
  didyouknow: string;
  dimorphism: boolean;
  habitat: string;
  images: { gallery: { url: string }[]; main: string };
  iucn: { description?: string; title?: string };
  map: { image: string; title: string };
  migration: boolean;
  name: { english: string; latin: string; spanish: string };
  order: string;
  size: string;
  sort: number;
  species: string;
  uid: string;
}

type ParamList = {
  uid: {
    uid: string;
  };
};

const Bird: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "uid">>();

  const [bird, setBird] = useState<birdDetail>(null);

  useEffect(() => {
    navigation.setOptions({ title: "Loading" });
  }, []);

  useEffect(() => {
    if (route.params.uid) {
      axios
        .get(`${baseUrl}/birds/${route.params.uid}`)
        .then((res) => res.data)
        .then((data) => {
          setBird(data);
          navigation.setOptions({ title: data.name.spanish });
        });
    }
  }, [route]);

  return bird ? (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <View style={{ elevation: 5 }}>
        <Image
          style={{ width: 430, height: 430, borderRadius: 15 }}
          source={{ uri: bird.images.main }}
        />
      </View>

      <Text></Text>
    </View>
  ) : (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <ActivityIndicator size="large" color="#7303fc" />
    </View>
  );
};

export default Bird;

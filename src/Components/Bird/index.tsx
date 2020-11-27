import React, { useEffect, useState } from "react";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import nodeEmoji from "node-emoji";
import { Audio } from "expo-av";
import axios from "axios";
import {
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";

import { baseUrl } from "../../Extras/baseUrl";
import { vmin, vh } from "../../Extras/ViewPortUnits";

import Title from "./Title";
import Text from "../General/Texto";

interface birdDetail {
  _links: { parent: string; self: string };
  audio?: { author?: string; file?: string };
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
  const audio = new Audio.Sound();

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

  useEffect(() => {
    if (bird && bird.audio && bird.audio.file) {
      audio.loadAsync({ uri: bird.audio.file });
    }
    return () => {
      audio.stopAsync().then(() => audio.unloadAsync());
    };
  }, [bird]);

  const reproducir = () => {
    if (bird && bird.audio && bird.audio.file) {
      return audio.playAsync();
    } else {
      ToastAndroid.showWithGravity(
        `Sonido no disponible ${nodeEmoji.get("disappointed_relieved")}`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  };

  return bird ? (
    <ScrollView>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: vh(3),
        }}
        onPress={() => reproducir()}
      >
        <Image
          style={{
            width: vmin(85),
            height: vmin(85),
            borderRadius: 15,
            borderColor: "#000",
            borderWidth: 0.0,
          }}
          source={{ uri: bird.images.main }}
        />
      </TouchableOpacity>

      {/* Datos generales */}
      <View>
        <Title title="Nombre latin" />
        <Text style={{ fontSize: 17, marginLeft: 30, marginVertical: 10 }}>
          {bird.name.latin}
        </Text>
        <Title title="Datos" />
        <Text
          style={{
            fontSize: 17,

            marginHorizontal: 30,
            marginTop: 15,
            textAlign: "justify",
          }}
        >{`Especie: ${bird.species} `}</Text>
        <Text
          style={{
            fontSize: 17,

            marginHorizontal: 30,
            marginTop: 15,
            textAlign: "justify",
          }}
        >
          {`Orden: ${bird.order}`}
        </Text>
        <Text
          style={{
            fontSize: 17,
            marginHorizontal: 30,
            marginTop: 15,
            textAlign: "justify",
          }}
        >{`Se ubica ${bird.map.title[0].toLowerCase()}${bird.map.title.substring(
          1
        )}`}</Text>
        <Text
          style={{
            fontSize: 17,

            marginHorizontal: 30,
            marginTop: 15,
            textAlign: "justify",
          }}
        >
          {`Tiene dimorfismo: ${bird.dimorphism ? "Si" : "No"}`}
        </Text>
        <Text
          style={{
            fontSize: 17,

            marginHorizontal: 30,
            marginTop: 15,
            textAlign: "justify",
          }}
        >
          {`Tamaño: ${bird.size}`}
        </Text>
        <Text
          style={{
            fontSize: 17,

            marginHorizontal: 30,
            marginTop: 15,
            textAlign: "justify",
          }}
        >{`Migra?: ${bird.migration ? "Si" : "No"}`}</Text>
        <Text
          style={{
            fontSize: 17,

            marginHorizontal: 30,
            marginTop: 15,
            textAlign: "justify",
          }}
        ></Text>

        {bird.iucn.title && bird.iucn.title !== "" && (
          <View>
            <Title title="IUCN" />
            <Text
              style={{
                fontSize: 17,
                marginLeft: 30,
                marginVertical: 10,
                textAlign: "justify",
              }}
            >
              {bird.iucn.title}
            </Text>
            <Text
              style={{
                fontSize: 17,

                marginHorizontal: 30,
                marginVertical: 10,
                textAlign: "justify",
              }}
            >
              {bird.iucn.description}
            </Text>
          </View>
        )}

        <Title title="Sabias que?" />
        <Text
          style={{
            fontSize: 17,
            marginHorizontal: 30,
            marginVertical: 15,
            textAlign: "justify",
          }}
        >
          {bird.didyouknow}
        </Text>

        <Title title="Habitat" />
        <Text
          style={{
            fontSize: 17,

            marginHorizontal: 30,
            marginVertical: 15,
            textAlign: "justify",
          }}
        >
          {bird.habitat}
        </Text>
      </View>
    </ScrollView>
  ) : (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <ActivityIndicator size="large" color="#7303FC" />
    </View>
  );
};

export default Bird;

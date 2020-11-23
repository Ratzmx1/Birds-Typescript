import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./src";
import { Provider } from "react-redux";

import { configureStore } from "./src/Redux/configureStore";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

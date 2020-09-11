import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import store from "./src/store";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

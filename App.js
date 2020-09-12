import React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import store from "./src/store";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>        
        <MainScreen />
      </PaperProvider>
    </Provider>
  );
}

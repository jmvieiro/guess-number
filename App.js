import { StyleSheet, View } from "react-native";

import COLORS from "./constants/colors";
import { Header } from "./components/Header";
import React from "react";
import { StartGameScreen } from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="6U355 7H3 NUM834" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

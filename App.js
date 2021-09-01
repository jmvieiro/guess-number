import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import AppLoading from "expo-app-loading";
import COLORS from "./constants/colors";
import { GameOverScreen } from "./screens/GameOverScreen";
import { GameScreen } from "./screens/GameScreen";
import { Header } from "./components/Header";
import { StartGameScreen } from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-BoldItalic": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
  });
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  if (!loaded) return <AppLoading />;

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = (rounds) => {
    setGuessRounds(rounds);
  };

  const handleRestart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        choice={userNumber}
        rounds={guessRounds}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="6U355 7H3 NUM834" />
      {content}
      <StatusBar style="dark" backgroundColor={COLORS.white} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import COLORS from "../constants/colors";
import { Card } from "../components/Card";
import { MAX_HEIGHT } from "../constants/props";
import { NumberContainer } from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
  else return rndNum;
};

export const GameScreen = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(0, 100, userNumber)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(rounds);
  }, [currentGuess, userNumber, onGameOver]);

  const handlerNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("No cheats!", "Tell the truth...!", [
        { text: "Try again", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") currentHigh.current = currentGuess;
    else currentLow.current = currentGuess;
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(rounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Screen</Text>
      <NumberContainer style={styles.text}>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlerNextGuess.bind(this, "lower")}>
          <View style={[styles.button, { backgroundColor: COLORS.secondary }]}>
            <Text style={styles.text}>Less</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlerNextGuess.bind(this, "greater")}>
          <View style={[styles.button, { backgroundColor: COLORS.success }]}>
            <Text style={styles.text}>Higher</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: Dimensions.get("window").height > MAX_HEIGHT ? 27 : 22,
    marginVertical: 10,
    marginBottom: 20,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  button: {
    color: "white",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    width: 100,
  },
  text: {
    color: COLORS.white,
    fontSize: Dimensions.get("window").height > MAX_HEIGHT ? 25 : 17,
  },
});

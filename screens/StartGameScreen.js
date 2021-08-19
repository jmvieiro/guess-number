import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import COLORS from "../constants/colors";
import { Card } from "./Card";
import FONTS from "../assets/fonts";

export const StartGameScreen = () => {
  const [inputError, setInputError] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const handleChangeNumber = (n) => setInputNumber(n);

  const handleConfirm = () => {
    if (inputNumber) {
      setInputError("");
    } else setInputError("Enter a number");
  };

  const handleClean = () => {
    setInputNumber("");
    setInputError("");
  };

  return (
    <View style={styles.screen}>
      <Text style={[styles.text, styles.title]}>Let's play!</Text>
      <Card style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
          style={styles.inputText}
          onChangeText={handleChangeNumber}
          maxLength={2}
          value={inputNumber}
        />
        <Text style={styles.inputError}>{inputError}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleClean}>
            <View
              style={[styles.button, { backgroundColor: COLORS.secondary }]}
            >
              <Text style={styles.text}>Clean</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleConfirm}>
            <View style={[styles.button, { backgroundColor: COLORS.success }]}>
              <Text style={styles.text}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    fontSize: 22,
    marginVertical: 10,
    marginBottom: 20,
    color: "black",
  },
  inputText: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 5,
    width: 90,
    height: 80,
    fontSize: 50,
    textAlign: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    backgroundColor: COLORS.white,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
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
    fontFamily: FONTS.primary,
    fontSize: 17,
  },
  inputError: {
    fontFamily: FONTS.primary,
    color: "red",
  },
});

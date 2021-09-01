import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import COLORS from "../constants/colors";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { MAX_HEIGHT } from "../constants/props";
import { NumberContainer } from "../components/NumberContainer";

export const StartGameScreen = ({ onStartGame }) => {
  const [inputError, setInputError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleChangeNumber = (n) => {
    setEnteredValue(n.replace(/[^0-9]/g, ""));
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredValue);
    if (
      !chosenNumber ||
      chosenNumber === NaN ||
      chosenNumber <= 0 ||
      chosenNumber > 99
    ) {
      setInputError("Enter a valid number");
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    setInputError("");
  };

  const handleClean = () => {
    setConfirmed(false);
    setEnteredValue("");
    setInputError("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={30}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.screen}>
            <Text style={[styles.text, styles.title]}>Let's play!</Text>
            <Card style={styles.inputContainer}>
              <Input
                style={styles.inputText}
                onChangeText={handleChangeNumber}
                blurOnSubmit
                autoCapitalization="none"
                keyboardType="numeric"
                maxLength={2}
                autoCorrect={false}
                value={enteredValue}
              />
              <Text style={styles.inputError}>{inputError}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleClean}>
                  <View
                    style={[
                      styles.button,
                      { backgroundColor: COLORS.secondary },
                    ]}
                  >
                    <Text style={styles.text}>Clean</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm}>
                  <View
                    style={[styles.button, { backgroundColor: COLORS.success }]}
                  >
                    <Text style={styles.text}>Confirm</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
            {confirmed && (
              <Card style={styles.inputContainer}>
                <Text style={styles.title}>Selected number</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <TouchableOpacity onPress={() => onStartGame(selectedNumber)}>
                  <View
                    style={[styles.button, { backgroundColor: COLORS.success }]}
                  >
                    <Text style={styles.text}>Start game!</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: Dimensions.get("window").height > MAX_HEIGHT ? 25 : 16,
    marginVertical: 10,
    marginBottom: Dimensions.get("window").height > MAX_HEIGHT ? 20 : 10,
    color: "black",
  },
  inputText: {
    borderRadius: 6,
    width: Dimensions.get("window").height > MAX_HEIGHT ? 90 : 50,
    height: Dimensions.get("window").height > MAX_HEIGHT ? 80 : 50,
    fontSize: Dimensions.get("window").height > MAX_HEIGHT ? 50 : 20,
    textAlign: "center",
  },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 200,
    marginBottom: Dimensions.get("window").height > MAX_HEIGHT ? 20 : 10,
    marginTop: Dimensions.get("window").height > MAX_HEIGHT ? 10 : 0,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: Dimensions.get("window").height > MAX_HEIGHT ? 20 : 10,
  },
  button: {
    color: "white",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    marginLeft: 3,
    width: Dimensions.get("screen").width / 3,
  },
  text: {
    color: COLORS.white,
    fontFamily: "OpenSans-Bold",
    fontSize: Dimensions.get("window").height > MAX_HEIGHT ? 20 : 12,
  },
  inputError: {
    color: "red",
  },
});

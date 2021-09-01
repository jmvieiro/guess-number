import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import COLORS from "../constants/colors";
import { Card } from "../components/Card";
import { MAX_HEIGHT } from "../constants/props";

export const GameOverScreen = ({ rounds, choice, onRestart }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => setIsPortrait(onPortrait());

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    statePortrait();
    return () => {
      Dimensions.removeEventListener("change", statePortrait);
    };
  }, []);

  return (
    <ScrollView>
      <View style={isPortrait ? styles.screen : styles.screenld}>
        <Image
          style={isPortrait ? styles.image : styles.imageld}
          source={require("../assets/images/GameOver.png")}
        />
        <View style={isPortrait ? styles.cont : styles.contld}>
          <Card style={styles.buttonContainer}>
            <Text style={styles.title}>Rounds: {rounds}</Text>
            <Text style={styles.title}>The number was: {choice}</Text>
          </Card>

          <TouchableOpacity onPress={onRestart}>
            <View style={[styles.button, { backgroundColor: COLORS.primary }]}>
              <Text style={styles.text}>Start new game</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  screenld: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cont: {
    flex: 1,
    flexDirection: "column",
  },
  contld: {
    flex: 1,
  },
  image: {
    height: Dimensions.get("window").height > MAX_HEIGHT ? 360 : 180,
    width: Dimensions.get("window").height > MAX_HEIGHT ? 360 : 180,
    resizeMode: "contain",
    alignSelf: "center",
  },

  imageld: {
    width: "40%", //Dimensions.get("window").height > MAX_HEIGHT ? 360 : 180,
    height: 300, //Dimensions.get("window").height > MAX_HEIGHT ? 360 : 180,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: Dimensions.get("window").height > MAX_HEIGHT ? 28 : 17,
    marginBottom: 5,
    color: "black",
  },
  buttonContainer: {
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: 2,
    marginBottom: 20,
    width: 300,
    maxWidth: "80%",
  },
  button: {
    color: "white",
    alignItems: "center",
    padding: 10,
    marginTop: 30,
    borderRadius: 6,
    width: 200,
    alignSelf: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: Dimensions.get("window").height > MAX_HEIGHT ? 25 : 17,
  },
});

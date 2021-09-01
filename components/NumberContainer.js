import { Dimensions, StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/colors";
import { MAX_HEIGHT } from "../constants/props";
import React from "react";

export const NumberContainer = (props) => {
  return (
    <View style={{ ...styles.numberContainer, ...props.style }}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    borderColor: COLORS.secondary,
    fontSize: Dimensions.get("window").height > MAX_HEIGHT ? 28 : 22,
  },
});

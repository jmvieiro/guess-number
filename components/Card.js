import { StyleSheet, View } from "react-native";

import COLORS from "../constants/colors"
import React from "react";

export const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    alignItems: "center",
    shadowColor: COLORS.header,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
});

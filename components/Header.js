import { Platform, StyleSheet, Text, View } from "react-native";

import COLOR from "../constants/colors";
import React from "react";

export const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingTop: Platform.OS === "android" ? 20 : 5,
    height: 80,
    backgroundColor: COLOR.header,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: COLOR.white,
    fontSize: Platform.OS === "android" ? 30 : 45,
  },
});

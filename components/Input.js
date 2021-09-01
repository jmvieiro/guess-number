import { StyleSheet, TextInput } from "react-native";

import COLORS from "../constants/colors";
import React from "react";

export const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
});

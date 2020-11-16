import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../colors";

function AppButton({ title, onPress, color = colors.secondary, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, { ...style }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    // textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Avenir-Light",
  },
});

export default AppButton;

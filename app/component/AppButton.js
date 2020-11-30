import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../colors";

function AppButton({
  title,
  onPress,
  width = "100%",
  color = colors.secondary,
  style,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, width }, { ...style }]}
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
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Kohinoor Bangla",
  },
});

export default AppButton;

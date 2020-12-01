import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import AppText from "./form/AppText";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppText style={styles.text}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
});

export default PickerItem;

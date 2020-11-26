import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import AppText from "./AppText";
import Icon from "../Icon";
import colors from "../../colors";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {item.sources ? (
          <Image
            source={item.sources}
            style={[styles.image, { backgroundColor: item.backgroundColor }]}
          />
        ) : (
          <Icon
            backgroundColor={item.backgroundColor}
            name={item.icon}
            size={80}
          />
        )}
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: colors.secondary,
    borderRadius: 40,
  },
});

export default CategoryPickerItem;

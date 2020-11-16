import React from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../colors";
import AppText from "./form/AppText";

function AccountItem({ image, title, subTitle, onPress, icon }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.profile}>
        {image ? <Image style={styles.image} source={image} /> : icon}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subTitle && (
            <AppText style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </AppText>
          )}
        </View>
        <MaterialCommunityIcons
          color={colors.lightGrey}
          name="chevron-right"
          size={25}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  subTitle: {
    color: colors.lightGrey,
  },
});

export default AccountItem;

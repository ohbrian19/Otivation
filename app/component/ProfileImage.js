import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../colors";

function ProfileImage({ image }) {
  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Image source={require("../assets/profile.png")} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    width: 90,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ProfileImage;

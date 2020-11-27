import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./form/AppText";
import ProfileImage from "./ProfileImage";

function Profile(props) {
  return (
    <View style={styles.container}>
      <ProfileImage />
      <AppText>image</AppText>
      <AppText>name</AppText>
      <AppText>email(maybe)</AppText>
      <AppText>height</AppText>
      <AppText>weight</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;

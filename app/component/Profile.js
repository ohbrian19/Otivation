import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../colors";
import AppText from "./form/AppText";
import ProfileImage from "./ProfileImage";

function Profile({ profile }) {
  return (
    <View style={styles.container}>
      <ProfileImage image={profile[0].image} />
      <AppText style={styles.name}>{profile[0].name || "name"}</AppText>
      <AppText style={styles.text}>{profile[0].email || "email"}</AppText>
      {profile[0].dateofbirth ? (
        <AppText style={styles.text}>
          {profile[0].dateofbirth.substring(3, 15)}
        </AppText>
      ) : (
        <AppText style={styles.temp}>Date of Birth</AppText>
      )}
      {profile[0].gender ? (
        <AppText style={styles.text}>{profile[0].gender}</AppText>
      ) : (
        <AppText style={styles.temp}>Gender</AppText>
      )}
      {profile[0].height ? (
        <AppText style={styles.text}>{profile[0].height} cm</AppText>
      ) : (
        <AppText style={styles.temp}>Height in cm</AppText>
      )}
      {profile[0].weight ? (
        <AppText style={styles.text}>{profile[0].weight} kg</AppText>
      ) : (
        <AppText style={styles.temp}>Weight in kg</AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  name: {
    margin: 2,
    marginTop: 7,
    fontWeight: "bold",
  },
  text: {
    margin: 2,
  },
  temp: {
    margin: 2,
    color: colors.lightGrey,
  },
});

export default Profile;

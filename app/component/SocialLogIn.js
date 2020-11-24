import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Google from "expo-google-app-auth";
import { APP_IOS_CLIENT_ID } from "@env";

import colors from "../colors";
// import { authService, firebaseInstance } from "../fbase";

function SocialLogIn({ name }) {
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        // androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: APP_IOS_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  const onSocialClick = async () => {
    console.log(name);
    // if (name === "google")
    //   provider = new firebaseInstance.auth.GoogleAuthProvider();
    // if (name === "github")
    //   provider = new firebaseInstance.auth.GithubAuthProvider();
    // await authService.signInWithPopup(provider);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onSocialClick}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    marginVertical: 8,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Avenir-Light",
  },
});

export default SocialLogIn;

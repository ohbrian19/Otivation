import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Google from "expo-google-app-auth";
import { APP_IOS_CLIENT_ID } from "@env";
import firebase from "firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../colors";
import { authService } from "../fbase";
import apiClient from "../api/client";

function SocialLogIn() {
  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (googleUser) => {
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      if (!isUserEqual(googleUser, firebaseUser)) {
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        authService.signInWithCredential(credential).catch((error) => {
          console.log("google auth error:", error);
        });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        // behavior: "web",
        iosClientId: APP_IOS_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);
        apiClient.post("/profiles", {
          name: result.user.name,
          email: result.user.email,
        });
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={signInWithGoogleAsync}>
      <MaterialCommunityIcons
        name="google"
        size={20}
        color={colors.lightGrey}
      />
      <Text style={styles.text}>{" sign in with Google"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Kohinoor Bangla",
  },
});

export default SocialLogIn;

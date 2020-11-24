import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../colors";

import AppButton from "../component/AppButton";
import SocialLogIn from "../component/SocialLogIn";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
      <View style={styles.socialLogIn}>
        <SocialLogIn name="google" />
        <SocialLogIn name="github" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
    paddingBottom: 220,
  },
  buttonsContainer: {
    padding: 20,
    width: "60%",
  },
  logo: {
    width: 180,
    height: 180,
  },
  logoContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
  socialLogIn: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});

export default WelcomeScreen;

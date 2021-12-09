import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../colors";

import AppButton from "../component/AppButton";
// import SocialLogIn from "../component/SocialLogIn";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
        {/* <SocialLogIn /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
  },
});

export default WelcomeScreen;

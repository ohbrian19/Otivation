import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../colors";
import AccountItem from "../component/AccountItem";
import Screen from "../component/Screen";

function AccountScreen() {
  const manageAccount = () => {
    console.log("handle profile");
  };

  const logout = () => {
    console.log("logged out");
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AccountItem
        title="Brian Oh"
        subTitle="ohbrian12@gmail.com"
        onPress={manageAccount}
        icon={
          <MaterialCommunityIcons name="account-circle-outline" size={70} />
        }
      />
      <View style={styles.logout}>
        <AccountItem
          title="Log Out"
          onPress={logout}
          icon={
            <MaterialCommunityIcons
              name="logout-variant"
              size={40}
              color={colors.primary}
            />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingTop: 20,
  },
  logout: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  logo: {
    height: 120,
    width: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default AccountScreen;

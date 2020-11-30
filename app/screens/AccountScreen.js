import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, StyleSheet, Image, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../colors";
import AccountItem from "../component/AccountItem";
import Screen from "../component/Screen";
import { authService } from "../fbase";
import UserContext from "../hooks/context";
import Profile from "../component/Profile";
import ProfileEditScreen from "./ProfileEditScreen";
import apiClient from "../api/client";
import ActivityIndicator from "../component/ActivityIndicator";
import { useFocusEffect } from "@react-navigation/native";

function AccountScreen() {
  const { user } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);

  const getProfile = () => {
    setLoading(true);
    apiClient
      .get(`/profiles/${user[0]}`)
      .then((response) => setProfile(response.data))
      .then(setTimeout(() => setLoading(false), 1500))
      .catch((err) => console.log(err));
  };

  useFocusEffect(
    useCallback(() => {
      if (user) {
        getProfile();
      }
    }, [])
  );

  const handleProfile = () => {
    setModalVisible(!modalVisible);
  };

  const logout = () => {
    authService.signOut();
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        {profile && <Profile profile={profile} />}
        <AccountItem
          title="Update Profile"
          onPress={handleProfile}
          icon={
            <MaterialCommunityIcons name="account-circle-outline" size={40} />
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
        <Modal visible={modalVisible} animationType="fade">
          {profile && (
            <ProfileEditScreen
              profile={profile}
              handleProfile={handleProfile}
              handleUpdate={getProfile}
            />
          )}
        </Modal>
      </Screen>
    </>
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

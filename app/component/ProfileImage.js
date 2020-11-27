import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

import colors from "../colors";

function ProfileImage({ image }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("you need to enable permission");
  };

  const onPress = () => {
    console.log(111);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) console.log("change image");
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={selectImage}>
      <View style={styles.container}>
        {image ? null : (
          <MaterialCommunityIcons name="camera" size={40} color={colors.grey} />
        )}
      </View>
    </TouchableWithoutFeedback>
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
    // overflow: "hidden",
  },
});

export default ProfileImage;

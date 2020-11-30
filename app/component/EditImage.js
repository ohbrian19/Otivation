import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";

import colors from "../colors";
import ErrorMessage from "./form/ErrorMessage";

function EditImage({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const [imageUri, setImageUri] = useState(values[name]);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("you need to enable permission");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        setFieldValue(name, result.uri);
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={selectImage}>
        <View style={styles.container}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <MaterialCommunityIcons
              name="camera"
              size={40}
              color={colors.grey}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    width: 130,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default EditImage;

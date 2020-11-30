import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import apiClient from "../api/client";
import colors from "../colors";
import AppButton from "../component/AppButton";
import EditImage from "../component/EditImage";
import AppForm from "../component/form/AppForm";
import AppFormField from "../component/form/AppFormField";
import AppFormPicker from "../component/form/AppFormPicker";
import SubmitButton from "../component/form/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().label("Name"),
  gender: Yup.string().label("Gender"),
  height: Yup.number().label("Height"),
  weight: Yup.number().label("Weight"),
  image: Yup.string(),
});

const genderList = [
  { label: "Male", value: 1 },
  { label: "Female", value: 2 },
];

const findLabel = (val) => genderList.find((e) => e.label === val);

function ProfileEditScreen({ handleUpdate, handleProfile, profile }) {
  const handleSubmit = (item) => {
    const data = {
      image: item.image,
      name: item.name,
      gender: item.gender.label,
      height: parseInt(item.height),
      weight: parseInt(item.weight),
    };
    apiClient
      .put(`/profiles/${profile[0].email}`, data)
      .then(() => handleUpdate())
      .then(() => handleProfile());
    handleProfile();
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          image: profile[0].image || "",
          name: profile[0].name || "",
          gender: profile[0].gender ? findLabel(profile[0].gender) : "",
          height: profile[0].height ? String(profile[0].height) : "",
          weight: profile[0].weight ? String(profile[0].weight) : "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <EditImage name="image" />
        <AppFormField
          width="90%"
          maxLength={50}
          name="name"
          placeholder="Name"
        />
        <AppFormPicker
          items={genderList}
          name="gender"
          placeholder="Gender"
          width="90%"
        />
        <AppFormField
          width="90%"
          keyboardType="numeric"
          maxLength={8}
          name="height"
          placeholder="Height in cm"
        />
        <AppFormField
          width="90%"
          keyboardType="numeric"
          maxLength={8}
          name="weight"
          placeholder="Weight in kg"
        />
        <SubmitButton color={colors.primary} width="90%" title="Update" />
        <AppButton
          title="Close"
          color={colors.primary}
          width="90%"
          onPress={handleProfile}
        />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

export default ProfileEditScreen;

import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Yup from "yup";
import apiClient from "../api/client";
import colors from "../colors";
import AppButton from "../component/AppButton";

import AppForm from "../component/form/AppForm";
import AppFormField from "../component/form/AppFormField";
import AppFormPicker from "../component/form/AppFormPicker";
import CategoryPickerItem from "../component/form/CategoryPickerItem";
import SubmitButton from "../component/form/SubmitButton";
import Screen from "../component/Screen";

const validationSchema = Yup.object().shape({
  date: Yup.string().label("Date"),
  category: Yup.string().required().label("Category"),
  exercise_name: Yup.string().label("ExerciseName"),
  number_of_sets: Yup.number().min(0).max(100).label("NumberOfSets"),
  weight: Yup.number().min(0).max(1000).label("Weight"),
  unit: Yup.string().label("Unit"),
  note: Yup.string().label("Note"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Shoulders",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Chest",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Back",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Abs",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Arms",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Legs",
    value: 6,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Others",
    value: 6,
  },
];

const unitList = [
  { label: "kg", value: 1 },
  { label: "lb", value: 2 },
];

const findCategory = (val) => categories.find((e) => e.label === val);
const findLabel = (val) => unitList.find((e) => e.label === val);

function ExerciseEditScreen({
  visible = false,
  date,
  category,
  exercise_name,
  number_of_sets,
  weight,
  unit,
  note,
  handleClose,
  id,
  getData,
}) {
  const handleSubmit = (item) => {
    const data = {
      date: item.date,
      category: item.category.label,
      exercise_name: item.exercise_name,
      number_of_sets: parseInt(item.number_of_sets),
      weight: parseInt(item.weight),
      unit: item.unit.label,
      note: item.note,
    };
    apiClient
      .put(`/exercises/${id}`, data)
      .then(() => getData())
      .then(() => handleClose());
  };

  return (
    <Modal visible={visible} animationType="slide">
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            date,
            category: findCategory(category),
            exercise_name,
            number_of_sets: String(number_of_sets),
            weight: String(weight),
            unit: findLabel(unit),
            note,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormPicker
            items={categories}
            name="category"
            placeholder="Category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            width="50%"
          />
          <AppFormField
            maxLength={50}
            name="exercise_name"
            placeholder="Exercise Name"
          />
          <AppFormField
            width={200}
            keyboardType="numeric"
            maxLength={8}
            name="number_of_sets"
            placeholder="Number of Sets"
          />
          <AppFormField
            width={200}
            keyboardType="numeric"
            maxLength={8}
            name="weight"
            placeholder="Weight"
          />
          <AppFormPicker
            items={unitList}
            name="unit"
            placeholder="Unit"
            width="50%"
          />
          <AppFormField
            multiline
            numberOfLines={3}
            maxLength={255}
            name="note"
            placeholder="Note"
          />
          <SubmitButton title="Update" />
          <AppButton title="Close" onPress={handleClose} />
        </AppForm>
      </Screen>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
  },
});

export default ExerciseEditScreen;

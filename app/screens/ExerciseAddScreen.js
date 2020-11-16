import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../component/form/AppForm";
import AppFormField from "../component/form/AppFormField";
import SubmitButton from "../component/form/SubmitButton";
import Screen from "../component/Screen";
import colors from "../colors";
import AppFormPicker from "../component/form/AppFormPicker";
import CategoryPickerItem from "../component/form/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  date: Yup.string().label("Date"),
  category: Yup.string().required().label("Category"),
  exerciseName: Yup.string().label("ExerciseName"),
  numberOfSets: Yup.number().min(0).max(100).label("NumberOfSets"),
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

function ExerciseAddScreen({ route }) {
  const handleSubmit = (item) => {
    console.log(item);
    // post this to backend database
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          date: route.params,
          category: null,
          exerciseName: "",
          numberOfSets: "",
          weight: "",
          unit: "",
          note: "",
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
        {/* Should CHANGE this later */}
        <AppFormField
          maxLength={50}
          name="exerciseName"
          placeholder="Exercise Name"
        />
        <AppFormField
          width={200}
          keyboardType="numeric"
          maxLength={8}
          name="numberOfSets"
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
        <SubmitButton title="Add" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.primary,
  },
});

export default ExerciseAddScreen;

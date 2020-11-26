import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../component/form/AppForm";
import AppFormField from "../component/form/AppFormField";
import AppFormPicker from "../component/form/AppFormPicker";
import SubmitButton from "../component/form/SubmitButton";
import Screen from "../component/Screen";
import colors from "../colors";
import CategoryPickerItem from "../component/form/CategoryPickerItem";
import apiClient from "../api/client";
import routes from "../navigation/routes";
import UserContext from "../hooks/context";
import LoadingScreen from "./LoadingScreen";

const validationSchema = Yup.object().shape({
  date: Yup.string().label("Date"),
  category: Yup.string().required().label("Category"),
  exercise_name: Yup.string().required().label("ExerciseName"),
  number_of_sets: Yup.number().min(0).max(100).label("NumberOfSets"),
  weight: Yup.number().min(0).max(1000).label("Weight"),
  unit: Yup.string().label("Unit"),
  note: Yup.string().label("Note"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    sources: require("../assets/category/Shoulders.png"),
    label: "Shoulders",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    sources: require("../assets/category/Chest.png"),
    label: "Chest",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    sources: require("../assets/category/Back.png"),
    label: "Back",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    sources: require("../assets/category/Abs.png"),
    label: "Abs",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    sources: require("../assets/category/Arms.png"),
    label: "Arms",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    sources: require("../assets/category/Legs.png"),
    label: "Legs",
    value: 6,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "human",
    label: "Others",
    value: 6,
  },
];

const unitList = [
  { label: "kg", value: 1 },
  { label: "lb", value: 2 },
];

function ExerciseAddScreen({ route, navigation }) {
  const { user } = useContext(UserContext);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (item) => {
    const data = {
      user_email: user,
      date: item.date,
      category: item.category.label,
      exercise_name: item.exercise_name,
      number_of_sets: parseInt(item.number_of_sets),
      weight: parseInt(item.weight),
      unit: item.unit.label,
      note: item.note,
    };
    apiClient
      .post("/exercises", data)
      .then(() => setVisible(true))
      .then(() => navigation.navigate(routes.EXERCISE_DETAIL));
  };

  return (
    <Screen style={styles.container}>
      <LoadingScreen onFinish={() => setVisible(false)} visible={visible} />
      <AppForm
        initialValues={{
          date: route.params,
          category: null,
          exercise_name: "",
          number_of_sets: "",
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

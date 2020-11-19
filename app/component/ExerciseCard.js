import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import apiClient from "../api/client";

import colors from "../colors";
import AppText from "./form/AppText";
import ExerciseEditScreen from "../screens/ExerciseEditScreen";

function ExerciseCard({
  id,
  date,
  category,
  exercise_name,
  number_of_sets,
  weight,
  unit,
  note,
  handleDelete,
  getData,
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const handleClose = () => setModalStatus(!modalStatus);

  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="square-edit-outline"
          size={20}
          onPress={() => {
            setModalStatus(true);
          }}
        />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          onPress={() => handleDelete(id)}
        />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.category}>{category}</AppText>
        <AppText>{exercise_name}</AppText>
        <AppText>
          {number_of_sets} sets of {weight} {unit}
        </AppText>
        <AppText>{note}</AppText>
      </View>
      <ExerciseEditScreen
        date={date}
        category={category}
        exercise_name={exercise_name}
        number_of_sets={number_of_sets}
        weight={weight}
        unit={unit}
        note={note}
        visible={modalStatus}
        handleClose={handleClose}
        id={id}
        getData={getData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.secondary,
    marginBottom: 20,
    overflow: "hidden",
    padding: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
    flexDirection: "row",
    zIndex: 1,
  },
});

export default ExerciseCard;

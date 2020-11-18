import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../colors";
import AppText from "./form/AppText";

function ExerciseCard({
  date,
  category,
  exercise_name,
  number_of_sets,
  weight,
  unit,
  note,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.category}>{category}</AppText>
          <AppText>{exercise_name}</AppText>
          <AppText>
            {number_of_sets} sets of {weight} {unit}
          </AppText>
          <AppText>{note}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    padding: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ExerciseCard;

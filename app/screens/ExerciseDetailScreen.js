import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../colors";
import Screen from "../component/Screen";
import routes from "../navigation/routes";
import ExerciseCard from "../component/ExerciseCard";
import AppText from "../component/form/AppText";
import apiClient from "../api/client";

function ExerciseDetailScreen({ route, navigation }) {
  const [exercises, setExercises] = useState([]);

  const getData = () => {
    apiClient
      .get(`/exercises/${route.params}`)
      .then((response) => setExercises(response.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Screen style={styles.container}>
      <View>
        <AppText style={styles.header}>{route.params}</AppText>
        <MaterialCommunityIcons
          name="dumbbell"
          size={40}
          onPress={() => navigation.navigate(routes.EXERCISE_ADD, route.params)}
          style={styles.button}
        />
      </View>
      {exercises.length !== 0 ? (
        <View style={styles.cardContainer}>
          {exercises.map((item, i) => (
            <ExerciseCard
              key={i}
              date={item.date}
              category={item.category}
              exercise_name={item.exercise_name}
              number_of_sets={item.number_of_sets}
              weight={item.weight}
              unit={item.unit}
              note={item.note}
            />
          ))}
        </View>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  button: {
    position: "absolute",
    top: 0,
    right: 10,
  },
  cardContainer: {
    top: 50,
    padding: 10,
  },
  header: {
    position: "absolute",
    top: 12,
    left: 20,
  },
});

export default ExerciseDetailScreen;

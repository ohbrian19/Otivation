import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import colors from "../colors";
import Screen from "../component/Screen";
import routes from "../navigation/routes";
import ExerciseCard from "../component/ExerciseCard";
import AppText from "../component/form/AppText";
import apiClient from "../api/client";

function ExerciseDetailScreen({ route, navigation }) {
  const [exercises, setExercises] = useState([]);

  const getData = async () => {
    console.log("data receieved from server");
    apiClient
      .get(`/exercises/${route.params}`)
      .then((response) => setExercises(response.data));
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const handleDelete = (id) => {
    apiClient.delete(`/exercises/${id}`).then(getData());
  };

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
      <View style={styles.cardContainer}>
        {exercises &&
          exercises.map((item) => (
            <ExerciseCard
              key={item.id}
              id={item.id}
              date={item.date}
              category={item.category}
              exercise_name={item.exercise_name}
              number_of_sets={item.number_of_sets}
              weight={item.weight}
              unit={item.unit}
              note={item.note}
              handleDelete={handleDelete}
              getData={getData}
            />
          ))}
      </View>
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

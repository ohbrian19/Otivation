import React, { useCallback, useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import colors from "../colors";
import Screen from "../component/Screen";
import routes from "../navigation/routes";
import ExerciseCard from "../component/ExerciseCard";
import AppText from "../component/form/AppText";
import apiClient from "../api/client";
import UserContext from "../hooks/context";
import { ScrollView } from "react-native-gesture-handler";

function ExerciseDetailScreen({ route, navigation }) {
  const [exercises, setExercises] = useState([]);
  const { user } = useContext(UserContext);

  const getData = () => {
    apiClient
      .get(`/exercises/${route.params}/${user}`)
      .then((response) => setExercises(response.data));
  };

  useFocusEffect(
    useCallback(() => {
      if (user) getData();
    }, [user])
  );

  const handleDelete = (id) => {
    Alert.alert("Delete", "Are you sure you want to delete?", [
      {
        text: "Yes",
        onPress: () => apiClient.delete(`/exercises/${id}`).then(getData()),
      },
      { text: "No" },
    ]);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.headerText}>{route.params}</AppText>
        <MaterialCommunityIcons
          name="dumbbell"
          size={40}
          onPress={() => navigation.navigate(routes.EXERCISE_ADD, route.params)}
          style={styles.button}
        />
      </View>
      <ScrollView>
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
      </ScrollView>
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
    padding: 10,
  },
  header: {
    zIndex: 1,
    paddingBottom: 50,
  },
  headerText: {
    position: "absolute",
    top: 12,
    left: 20,
  },
});

export default ExerciseDetailScreen;

import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../colors";
import Screen from "../component/Screen";
import routes from "../navigation/routes";
import ExerciseCard from "../component/ExerciseCard";
import AppText from "../component/form/AppText";

const fake = [
  {
    date: "2020-11-11",
    category: "Chest",
    exerciseName: "Bench-Press",
    numberOfSets: 3,
    weight: 100,
    unit: "lb",
    note: "first day at gym",
  },
  {
    date: "2020-11-11",
    category: "Shoulder",
    exerciseName: "Shoulder-Press",
    numberOfSets: 4,
    weight: 20,
    unit: "kg",
    note: "fake dataaa testing",
  },
];

function ExerciseDetailScreen({ route, navigation }) {
  // fetch data from backend
  const getData = () => {};

  const handlePress = () => {
    navigation.navigate(routes.EXERCISE_ADD, route.params);
  };

  return (
    <Screen style={styles.container}>
      <View>
        <AppText style={styles.header}>{route.params}</AppText>
        <MaterialCommunityIcons
          name="dumbbell"
          size={40}
          onPress={handlePress}
          style={styles.button}
        />
      </View>
      <View style={styles.cardContainer}>
        {fake.map((item, i) => (
          <ExerciseCard
            key={i}
            date={item.date}
            category={item.category}
            exerciseName={item.exerciseName}
            numberOfSets={item.numberOfSets}
            weight={item.weight}
            unit={item.unit}
            note={item.note}
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

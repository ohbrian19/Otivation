import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import apiClient from "../api/client";
import colors from "../colors";
import AppText from "../component/form/AppText";

import Screen from "../component/Screen";
import routes from "../navigation/routes";

function ExerciseScreen({ navigation }) {
  const [exrcises, setExercises] = useState([]);
  const [marked, setMarked] = useState({});

  const getAllExercises = () => {
    apiClient.get("/exercises").then((response) => setExercises(response.data));
  };

  const handlePress = ({ dateString }) => {
    navigation.navigate(routes.EXERCISE_DETAIL, dateString);
  };

  useEffect(() => {
    getAllExercises();
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText>Days of Workout: {Object.keys(marked).length}</AppText>
      </View>
      <CalendarList onDayPress={handlePress} markedDates={marked} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
});

export default ExerciseScreen;

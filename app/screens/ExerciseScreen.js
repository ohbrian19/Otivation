import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import apiClient from "../api/client";
import colors from "../colors";
import AppText from "../component/form/AppText";
import Screen from "../component/Screen";
import UserContext from "../hooks/context";
import routes from "../navigation/routes";

function ExerciseScreen({ navigation }) {
  const [marked, setMarked] = useState({});
  const { user } = useContext(UserContext);

  const getAllExercises = () => {
    apiClient
      .get(`/exercises/${user}`)
      .then((response) => findAllDates(response.data));
  };

  const findAllDates = (arr) => {
    let dates = {};
    for (let ele of arr) {
      if (!dates[ele.date])
        dates[ele.date] = { selected: true, selectedColor: colors.secondary };
    }
    setMarked(dates);
  };

  const handlePress = ({ dateString }) => {
    navigation.navigate(routes.EXERCISE_DETAIL, dateString);
  };

  useFocusEffect(
    useCallback(() => {
      if (user) getAllExercises();
    }, [user])
  );

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

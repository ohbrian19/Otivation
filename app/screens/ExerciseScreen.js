import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import colors from "../colors";
import AppText from "../component/form/AppText";

import Screen from "../component/Screen";
import routes from "../navigation/routes";

function ExerciseScreen({ navigation }) {
  const [marked, setMarked] = useState({});

  const handlePress = ({ dateString }) => {
    if (!marked[dateString])
      setMarked({
        ...marked,
        [dateString]: { selected: true, selectedColor: colors.secondary },
      });
    else {
      const state = { ...marked };
      delete state[dateString];
      setMarked(state);
    }
    navigation.navigate(routes.EXERCISE_DETAIL, dateString);
  };

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

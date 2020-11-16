import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { date } from "yup";
import colors from "../colors";
import AppText from "../component/form/AppText";

import Screen from "../component/Screen";
import routes from "../navigation/routes";

// const fakeData = {
//   "ohbrian12@gmail.com": [
//     {
//       date: "2020-11-11",
//       category: "Chest",
//       exerciseName: "Bench-Press",
//       numberOfSets: 3,
//       weight: 100,
//       unit: "lb",
//       note: "first day at gym",
//     },
//     {
//       date: "2020-11-12",
//       category: "Shoulder",
//       exerciseName: "Shoulder-Press",
//       numberOfSets: 4,
//       weight: 20,
//       unit: "kg",
//       note: "fake dataaa testing",
//     },
//   ],
// };

// const fetch = (data) => {
//   let result = {};
//   for (let i = 0; i < data["ohbrian12@gmail.com"].length; i++) {
//     let key = data["ohbrian12@gmail.com"][i].date;
//     result[key] = 0;
//   }
//   return Object.keys(result);
// };

function ExerciseScreen({ navigation }) {
  const [marked, setMarked] = useState({});

  // const rendering = () => {
  //   let data = fetch(fakeData);
  //   let result = {};
  //   for (let i = 0; i < data.length; i++) {
  //     result[data[i]] = { selected: true, selectedColor: colors.secondary };
  //   }
  //   setMarked({
  //     ...marked,
  //     ...result,
  //   });
  // };

  // useEffect(() => {
  //   rendering();
  // }, []);

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

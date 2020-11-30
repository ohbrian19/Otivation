import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";

import apiClient from "../api/client";
import colors from "../colors";
import ActivityIndicator from "../component/ActivityIndicator";
import AppText from "../component/form/AppText";
import Screen from "../component/Screen";
import UserContext from "../hooks/context";
import routes from "../navigation/routes";

function ExerciseScreen({ navigation }) {
  const [marked, setMarked] = useState({});
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const getAllExercises = () => {
    setLoading(true);
    apiClient
      .get(`/exercises/${user[0]}`)
      .then((response) => findAllDates(response.data))
      .then(setTimeout(() => setLoading(false), 1500))
      .catch((err) => console.log(err));
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
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <View style={styles.header}>
          <AppText>Days of Workout: {Object.keys(marked).length}</AppText>
        </View>
        <CalendarList
          onDayPress={handlePress}
          markedDates={marked}
          theme={{
            textDayFontFamily: "Kohinoor Bangla",
            textMonthFontFamily: "Kohinoor Bangla",
            textDayHeaderFontFamily: "Kohinoor Bangla",
          }}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
});

export default ExerciseScreen;

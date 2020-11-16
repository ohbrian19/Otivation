import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ExerciseScreen from "../screens/ExerciseScreen";
import ExerciseDetailScreen from "../screens/ExerciseDetailScreen";
import ExerciseAddScreen from "../screens/ExerciseAddScreen";

const Stack = createStackNavigator();

const ExerciseNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Exercise"
      component={ExerciseScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Exercise_Detail"
      component={ExerciseDetailScreen}
      options={{
        headerShown: false,
        title: "Exercise",
      }}
    />
    <Stack.Screen
      name="Exercise_Add"
      component={ExerciseAddScreen}
      options={{
        title: "Add Exercise",
      }}
    />
  </Stack.Navigator>
);
export default ExerciseNavigator;

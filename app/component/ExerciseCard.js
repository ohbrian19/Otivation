import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Image } from "react-native";

import colors from "../colors";
import AppText from "./form/AppText";
import ExerciseEditScreen from "../screens/ExerciseEditScreen";

const categories = [
  {
    sources: require("../assets/category/Shoulders.png"),
    category: "Shoulders",
  },
  {
    sources: require("../assets/category/Chest.png"),
    category: "Chest",
  },
  {
    sources: require("../assets/category/Back.png"),
    category: "Back",
  },
  {
    sources: require("../assets/category/Abs.png"),
    category: "Abs",
  },
  {
    sources: require("../assets/category/Arms.png"),
    category: "Arms",
  },
  {
    sources: require("../assets/category/Legs.png"),
    category: "Legs",
  },
  {
    category: "Others",
  },
];

function ExerciseCard({
  id,
  date,
  category,
  exercise_name,
  number_of_sets,
  weight,
  unit,
  note,
  handleDelete,
  getData,
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const handleClose = () => setModalStatus(!modalStatus);
  const sourcePath =
    categories.find((ele) => ele.category === category).sources || null;

  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="square-edit-outline"
          size={20}
          onPress={() => {
            setModalStatus(true);
          }}
        />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          onPress={() => handleDelete(id)}
        />
      </View>
      <View style={styles.detailsContainer}>
        {sourcePath && <Image style={styles.image} source={sourcePath} />}
        <AppText style={{ fontWeight: "bold", fontSize: 18 }}>
          {exercise_name}
        </AppText>
        {number_of_sets && weight ? (
          <>
            <AppText style={styles.body}>
              {number_of_sets} sets of {weight} {unit}
            </AppText>
            <AppText style={styles.body}>{note}</AppText>
          </>
        ) : number_of_sets ? (
          <>
            <AppText style={styles.body}>{number_of_sets} sets</AppText>
            <AppText style={styles.body}>{note}</AppText>
          </>
        ) : (
          <AppText style={styles.body}>{note}</AppText>
        )}
      </View>
      <ExerciseEditScreen
        date={date}
        category={category}
        exercise_name={exercise_name}
        number_of_sets={number_of_sets}
        weight={weight}
        unit={unit}
        note={note}
        visible={modalStatus}
        handleClose={handleClose}
        id={id}
        getData={getData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.secondary,
    marginBottom: 20,
    overflow: "hidden",
    padding: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
    flexDirection: "row",
    zIndex: 1,
  },
  image: {
    width: 35,
    height: 35,
    right: 5,
    bottom: 5,
  },
  body: {
    fontSize: 16,
  },
});

export default ExerciseCard;

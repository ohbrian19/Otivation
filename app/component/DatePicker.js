import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import defaultStyles from "../styles";
import AppText from "./form/AppText";
import Screen from "./Screen";
import colors from "../colors";
import AppButton from "./AppButton";

function DatePicker({
  placeholder,
  onSelectItem,
  width = "100%",
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dob, setDob] = useState(new Date());

  const onChange = (event, date) => {
    setDob(date);
  };

  const onSelect = () => {
    onSelectItem(dob);
    setModalVisible(false);
  };

  const changeFormat = (dob) => {
    const date = String(dob).substring(3, 15);
    return date.substring(1);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {selectedItem ? (
            <AppText style={styles.text}>{changeFormat(selectedItem)}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen style={styles.modalContainer}>
          <DateTimePicker value={dob} mode="date" onChange={onChange} />
          <AppButton
            title="Select"
            color={colors.secondary}
            onPress={onSelect}
          />
          <AppButton
            title="Close"
            color={colors.secondary}
            onPress={() => setModalVisible(false)}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 15,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInput: defaultStyles.text,
  icon: {
    marginRight: 10,
  },
  text: { flex: 1 },
  placeholder: {
    color: colors.grey,
    flex: 1,
  },
  modalContainer: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
  },
});

export default DatePicker;

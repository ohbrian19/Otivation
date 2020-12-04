import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import DatePicker from "../DatePicker";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  width,
  placeholder,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      {name === "dateOfBirth" ? (
        <DatePicker
          onSelectItem={(item) => setFieldValue(name, item)}
          selectedItem={values[name]}
          placeholder={placeholder}
          width={width}
        />
      ) : (
        <AppPicker
          items={items}
          onSelectItem={(item) => setFieldValue(name, item)}
          PickerItemComponent={PickerItemComponent}
          placeholder={placeholder}
          selectedItem={values[name]}
          numberOfColumns={numberOfColumns}
          width={width}
        />
      )}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;

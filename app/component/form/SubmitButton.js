import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, width, color }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      color={color}
      width={width}
      title={title}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;

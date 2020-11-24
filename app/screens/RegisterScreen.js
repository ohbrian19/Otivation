import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../component/Screen";
import Form from "../component/form/AppForm";
import FormField from "../component/form/AppFormField";
import SubmitButton from "../component/form/SubmitButton";
import ErrorMessage from "../component/form/ErrorMessage";
import colors from "../colors";
import { authService } from "../fbase";

// import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState();

  const onSubmit = async ({ email, password }) => {
    try {
      await authService.createUserWithEmailAndPassword(email, password);
      setError();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {/* <ActivityIndicator visible={registerApi.loading || loginApi.loading} /> */}
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {error && <ErrorMessage error={error} visible={true} />}
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;

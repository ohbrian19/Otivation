import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

import colors from "../colors";

function LoadingScreen({ onFinish, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <LottieView
          autoPlay={true}
          onAnimationFinish={onFinish}
          source={require("../assets/animation/finish.json")}
          style={styles.animation}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
  animation: {
    width: 150,
  },
});

export default LoadingScreen;

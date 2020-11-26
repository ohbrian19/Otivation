import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";

function Splash() {
  const [visible, setVisible] = useState(true);
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <LottieView
          source={require("../../assets/animation/splash.json")}
          autoPlay
          loop={false}
          onAnimationFinish={() => setVisible(false)}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "100%",
  },
});

export default Splash;

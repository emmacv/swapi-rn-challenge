import { StyleSheet, View } from "react-native";
import React from "react";
import Loading from "../../components/loading";

const LoadingTemplate = () => (
  <View style={styles.container}>
    <Loading size={100} />
  </View>
);

export default LoadingTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto-Black",
  },
});

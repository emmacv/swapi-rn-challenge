import { Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import backgroundImage from "../../../assets/img/background.jpg";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Container = ({ children, title }: Props) => (
  <ImageBackground
    source={backgroundImage}
    style={styles.container}
  >
    <Text style={styles.text}>{title}</Text>
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto-Black",
  },
});

export default Container;

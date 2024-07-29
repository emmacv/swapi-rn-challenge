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
    style={{
      flex: 1,
    }}
  >
    <Text style={styles.text}>{title}</Text>
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Container;

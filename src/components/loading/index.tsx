import React from "react";
import LottieView from "lottie-react-native";

type Props = {
  size?: number | `${number}%`;
};

const Loading = ({ size = '100%' }: Props) => (
  <LottieView
    source={require("../../../assets/lottie/loading.json")}
    style={{ width: size, height: size }}
    autoPlay
    loop
  />
);

export default Loading;

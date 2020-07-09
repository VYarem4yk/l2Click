import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { BACKGROUND_IMAGE_OBELISK } from "../assets";

export const Wrapper = ({ children }) => {
  const { backgroundStyle } = styles;
  return (
    <ImageBackground source={BACKGROUND_IMAGE_OBELISK} style={backgroundStyle}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

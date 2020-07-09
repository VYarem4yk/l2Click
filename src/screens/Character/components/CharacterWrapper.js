import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { CHARACTER_BACKGROUND } from "../constants";

export const CharacterWrapper = ({ children }) => {
  const { characterScreenWrapper, backgroundImage } = styles;
  return (
    <View style={characterScreenWrapper}>
      <ImageBackground source={CHARACTER_BACKGROUND} style={backgroundImage}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  characterScreenWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

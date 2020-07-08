import React from "react";
import { View, StyleSheet } from "react-native";

export const CharacterWrapper = ({ children }) => {
  const { characterScreenWrapper } = styles;
  return <View style={characterScreenWrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  characterScreenWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

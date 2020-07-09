import React from "react";
import { View, StyleSheet } from "react-native";

export const CharacterInfoWrapper = ({ children }) => {
  const { characterInfoWrapper } = styles;
  return <View style={characterInfoWrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  characterInfoWrapper: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
});

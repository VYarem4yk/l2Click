import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CharacterInfo = ({ characterLevel }) => {
  const { nameWrapper, infoWrapper, levelWrapper, textStyle } = styles;
  const CHARACTER_NAME = "Vlad";
  return (
    <View style={infoWrapper}>
      <View style={levelWrapper}>
        <Text style={textStyle}>{characterLevel}</Text>
      </View>
      <View style={nameWrapper}>
        <Text style={textStyle}>{CHARACTER_NAME}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infoWrapper: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    marginVertical: 2,
  },

  nameWrapper: {
    width: "85%",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  levelWrapper: {
    width: "15%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginRight: 5,
  },
  textStyle: { color: "gold", fontWeight: "bold" },
});

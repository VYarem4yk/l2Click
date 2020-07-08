import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CharacterSkillsBar = (props) => {
  const { characterSkillsBarWrapper, characterSkill } = styles;
  return (
    <View style={characterSkillsBarWrapper}>
      <View style={characterSkill}>
        <Text>1</Text>
      </View>
      <View style={characterSkill}>
        <Text>2</Text>
      </View>
      <View style={characterSkill}>
        <Text>3</Text>
      </View>
      <View style={characterSkill}>
        <Text>4</Text>
      </View>
      <View style={characterSkill}>
        <Text>5</Text>
      </View>
      <View style={characterSkill}>
        <Text>6</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  characterSkillsBarWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(8, 10, 11, 0.3)",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    marginBottom: 80,
    paddingHorizontal: 10,
  },
  characterSkill: {
    flex: 1,
    backgroundColor: "rgba(8, 10, 11, 0.6)",
    borderWidth: 2,
    justifyContent: "space-between",
    margin: 3,
  },
});

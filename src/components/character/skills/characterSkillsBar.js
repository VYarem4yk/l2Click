import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useSkillHeal } from "../store/actions";

export const CharacterSkillsBar = ({ useSkillHeal }) => {
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
        <TouchableOpacity
          onPress={() => {
            useSkillHeal(20, 20);
          }}
        >
          <Text style={{ color: "red" }}>REGEN</Text>
        </TouchableOpacity>
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

const mapStateToProps = (state) => ({
  monsters: state.monster.monsters,
  monsterId: state.monster.monsterId,
  monsterIsKilled: state.monster.monsterIsKilled,
  characterPhysicalDamage: state.character.characterPhysicalDamage,
});

export default connect(mapStateToProps, {
  useSkillHeal,
})(CharacterSkillsBar);

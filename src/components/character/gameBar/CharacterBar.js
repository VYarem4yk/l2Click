import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { CharacterInfo } from "./CharacterInfo";
import { CharacterHealth } from "./CharacterHealth";
import { CharacterMana } from "./CharacterMana";
import { CharacterExperience } from "./CharacterExperience";
import {
  setCharacterLevel,
  characterRessurection,
  characterHealthRegeneration,
  characterManaRegeneration,
} from "../store/actions";
import { connect } from "react-redux";

const CharacterBar = ({
  characterLevel,
  levelsUpExperience,
  setCharacterLevel,
  characterHealth,
  characterCurrentHealth,
  basicHealthRegeneration,
  characterMana,
  characterCurrentMana,
  basicManaRegeneration,
  monsters,
  monsterId,
  monsterIsKilled,
  characterManaRegeneration,
  characterRessurection,
  characterHealthRegeneration,
}) => {
  debugger;
  const [currentExperience, setCurrentExperience] = useState(0);
  const { characterBarWrapper, characterWrapper } = styles;

  const getExperienceWithBalance = () => {
    return monsters[monsterId].monsterLevel != characterLevel
      ? currentExperience +
          monsters[monsterId].monsterExperience /
            Math.abs(characterLevel - monsters[monsterId].monsterLevel)
      : currentExperience + monsters[monsterId].monsterExperience;
  };

  const shouldLevelUp = () => {
    return currentExperience > levelsUpExperience[`level_${characterLevel}`];
  };

  const deathPenalty = () => {
    const penaltyExperiencePercent = 0.3;
    const minimalExperiencePercent = 0;
    const necessaryExperience = levelsUpExperience[`level_${characterLevel}`];
    return currentExperience -
      Math.ceil(necessaryExperience * penaltyExperiencePercent) <
      minimalExperiencePercent
      ? minimalExperiencePercent
      : currentExperience -
          Math.ceil(necessaryExperience * penaltyExperiencePercent);
  };

  useEffect(() => {
    monsterIsKilled && setCurrentExperience(getExperienceWithBalance());
  }, [monsterIsKilled]);

  useEffect(() => {
    if (shouldLevelUp()) {
      setCharacterLevel();
      setCurrentExperience(
        currentExperience - levelsUpExperience[`level_${characterLevel}`]
      );
    }
    characterCurrentHealth <= 0 && alert("You are Dead, Noob! Go Home!!!");
    characterCurrentHealth <= 0 &&
      setCurrentExperience(
        // modify with functions and get rid of magical numbers
        deathPenalty()
      );
    characterCurrentHealth <= 0 && characterRessurection();
  });

  return (
    <View style={characterBarWrapper}>
      <View style={characterWrapper}>
        <CharacterInfo characterLevel={characterLevel} />
        <CharacterHealth
          characterHealth={characterHealth}
          characterCurrentHealth={characterCurrentHealth}
          basicHealthRegeneration={basicHealthRegeneration}
          characterHealthRegeneration={characterHealthRegeneration}
        />
        <CharacterMana
          characterMana={characterMana}
          characterCurrentMana={characterCurrentMana}
          basicManaRegeneration={basicManaRegeneration}
          characterManaRegeneration={characterManaRegeneration}
        />
        <CharacterExperience
          currentExperience={currentExperience}
          levelsUpExperience={levelsUpExperience[`level_${characterLevel}`]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  characterBarWrapper: {
    flex: 2,
    marginTop: 30,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    width: "100%",
  },
  characterWrapper: {
    width: "60%",
    height: "100%",
    backgroundColor: "rgba(30, 15, 15, 0.55)",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 2,
    padding: 5,
  },
});

const mapStateToProps = (state) => ({
  characterLevel: state.character.characterLevel,
  characterHealth: state.character.characterHealth,
  characterCurrentHealth: state.character.characterCurrentHealth,
  basicHealthRegeneration: state.character.basicHealthRegeneration,
  isHealthRecovered: state.character.isHealthRecovered,
  characterMana: state.character.characterMana,
  characterCurrentMana: state.character.characterCurrentMana,
  levelsUpExperience: state.character.levelsUpExperience,
  monsters: state.monster.monsters,
  monsterId: state.monster.monsterId,
  monsterIsKilled: state.monster.monsterIsKilled,
});

export default connect(mapStateToProps, {
  setCharacterLevel,
  characterRessurection,
  characterHealthRegeneration,
  characterManaRegeneration,
})(CharacterBar);

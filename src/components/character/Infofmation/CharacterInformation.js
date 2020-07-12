import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export const CharacterInformation = ({
  characterPhysicalDamage,
  characterMagicalDamage,
  characterMagicalDefence,
  characterPhysicalDefence,
  characterAttackSpeed,
  characterSkillRecoverySpeed,
  characterCriticalChance,
}) => {
  return (
    <View style={styles.informationWrapper}>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Physical Damage</Text>
        <Text style={styles.informationText}>{characterPhysicalDamage}</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Physical Defence</Text>
        <Text style={styles.informationText}>{characterPhysicalDefence}</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Critical Chance</Text>
        <Text style={styles.informationText}>{characterCriticalChance}</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Attack Speed</Text>
        <Text style={styles.informationText}>{characterAttackSpeed}</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Magical Damage</Text>
        <Text style={styles.informationText}>{characterMagicalDefence}</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Magical Defence</Text>
        <Text style={styles.informationText}>{characterPhysicalDefence}</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Recovery Speed</Text>
        <Text style={styles.informationText}>
          {characterSkillRecoverySpeed}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  informationWrapper: {
    flex: 2,
    backgroundColor: "rgba(30, 15, 15, 0.8)",
    marginTop: 25,
    marginHorizontal: 10,
    padding: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  informationField: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  informationText: {
    color: "white",
    fontSize: 12,
  },
});

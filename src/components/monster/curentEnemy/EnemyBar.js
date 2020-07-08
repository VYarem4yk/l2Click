import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { EnemyInfo } from "./EnemyInfo";
import { EnemyHealth } from "./EnemyHealth";

export default function EnemyBar({
  monsterName,
  monsterLevel,
  monsterHealth,
  currentMonsterHealth,
  monsterDrop,
}) {
  return (
    <View style={styles.EnemyBarWrapper}>
      <EnemyInfo
        monsterName={monsterName}
        monsterLevel={monsterLevel}
        monsterDrop={monsterDrop}
      />
      <EnemyHealth
        monsterHealth={monsterHealth}
        currentMonsterHealth={currentMonsterHealth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  EnemyBarWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(30, 15, 15, 0.55)",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 2,

    padding: 5,
  },
});

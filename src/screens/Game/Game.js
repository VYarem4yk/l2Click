import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import CharacterBar from "../../components/character/gameBar/CharacterBar";
import MonsterArea from "../../components/monster/enemyArea/MonsterArea";
import { CharacterSkillsBar } from "../../components/character/skills/characterSkillsBar";
import { BACKGROUND_IMAGE_OBELISK } from "./assets";

export const Game = () => {
  const { backgroundStyle } = styles;
  return (
    <ImageBackground source={BACKGROUND_IMAGE_OBELISK} style={backgroundStyle}>
      <CharacterBar />
      <MonsterArea />
      <CharacterSkillsBar />
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

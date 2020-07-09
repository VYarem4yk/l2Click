import React from "react";
import CharacterBar from "../../components/character/gameBar/CharacterBar";
import MonsterArea from "../../components/monster/enemyArea/MonsterArea";
import { CharacterSkillsBar } from "../../components/character/skills/characterSkillsBar";
import { Wrapper } from "./components/Wrapper";

export const Game = () => {
  const { backgroundStyle } = styles;
  return (
    <Wrapper>
      <CharacterBar />
      <MonsterArea />
      <CharacterSkillsBar />
    </Wrapper>
  );
};

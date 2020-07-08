import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import EnemyBar from "./EnemyBar";

export const CurentEnemy = ({
  setMonsterKilled,
  pickUpDrop,
  monster,
  characterReceiveDamage,
  characterPhysicalDamage,
}) => {
  const {
    monsterHealth,
    monsterImage,
    monsterLevel,
    monsterName,
    monsterDrop,
    monsterDamage,
    monsterPhysicalDefence,
  } = monster;

  const [currentMonsterHealth, setCurrentMonsterHealth] = useState(0);
  const [itemDropped, setItemDropped] = useState(false);
  const [monsterHP, setMonsterHP] = useState(currentMonsterHealth);
  const [characterAttackCounter, setCharacterAttackCounter] = useState(0);

  useEffect(() => {
    setCurrentMonsterHealth(monsterHealth);
    setMonsterHP(monsterHealth);
  }, [monsterHealth]);
  useEffect(() => {
    setMonsterHP(monsterHealth);
    characterAttackCounter > 1 && characterReceiveDamage(monsterDamage);
    characterAttackCounter > 1 && setCharacterAttackCounter(0);
  });
  const {
    monsterWrapperStyle,
    monsterBarWrapperStyle,
    monsterDropStyle,
    monsterDropWrapperStyle,
    monsterImageStyle,
    monsterImageWrapperStyle,
    monsterDropImageStyle,
  } = styles;
  /* (P.Atk*70)/Enemy P.def  L2-Formula*/
  const Attack = (monsterHP, currentMonsterHealth) => {
    if (
      currentMonsterHealth >
      Math.ceil((characterPhysicalDamage * 30) / monsterPhysicalDefence)
    ) {
      setMonsterKilled(false);
      setCurrentMonsterHealth(
        currentMonsterHealth -
          Math.ceil((characterPhysicalDamage * 30) / monsterPhysicalDefence)
      );
      setCharacterAttackCounter(characterAttackCounter + 1);
    } else {
      setCurrentMonsterHealth(monsterHP);
      setMonsterKilled(true);
      setItemDropped(true);
    }
  };

  return (
    <View style={monsterWrapperStyle}>
      <View style={monsterBarWrapperStyle}>
        <EnemyBar
          monsterName={monsterName}
          monsterLevel={monsterLevel}
          monsterHealth={monsterHP}
          currentMonsterHealth={currentMonsterHealth}
          monsterDrop={monsterDrop}
        />
      </View>
      <TouchableOpacity
        style={monsterImageWrapperStyle}
        onPress={() => {
          Attack(monsterHP, currentMonsterHealth);
        }}
      >
        <Image source={monsterImage} style={monsterImageStyle} />
      </TouchableOpacity>
      <View style={monsterDropWrapperStyle}>
        {itemDropped && (
          <TouchableOpacity
            style={monsterDropStyle}
            onPress={() => {
              Math.random() < 0.5 && pickUpDrop(monsterDrop);
              setItemDropped(false);
            }}
          >
            <Image
              source={require("../../../../assets/monsters/adena.png")}
              style={monsterDropImageStyle}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monsterWrapperStyle: {
    flex: 2,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  monsterDropWrapperStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,

    width: "100%",
  },
  monsterBarWrapperStyle: {
    flex: 2,
    width: "100%",
  },
  monsterImageWrapperStyle: {
    flex: 7,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  monsterImageStyle: {
    height: "100%",
  },
  monsterDropStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  monsterDropImageStyle: {
    width: "40%",
    height: "100%",
  },
});

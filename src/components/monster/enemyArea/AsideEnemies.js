import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const AsideEnemy = ({ setId, asideMonsterImage }) => {
  const { monsterWrapper, miniMonsterImage } = styles;
  return (
    <TouchableOpacity style={monsterWrapper} onPress={setId}>
      <Image source={asideMonsterImage} style={miniMonsterImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  monsterWrapper: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
  },
  miniMonsterImage: {
    width: "100%",
    height: "100%",
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export const EnemyHealth = (props) => {
  const { monsterHealth, currentMonsterHealth } = props;

  const { enemyHealthWrapper, textWrapper, currentHealthStyle } = styles;
  return (
    <View style={enemyHealthWrapper}>
      <View
        style={[
          currentHealthStyle,
          {
            width: `${(100 * currentMonsterHealth) / monsterHealth}%`,
          },
        ]}
      />
      <View style={textWrapper}>
        <Text>
          {currentMonsterHealth}/{monsterHealth}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  enemyHealthWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(110, 1, 1, 0.6)",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 2,
  },
  currentHealthStyle: {
    position: "absolute",
    height: "100%",
    backgroundColor: "rgba(251, 18, 18, 0.4)",
    borderRadius: 5,
  },
});

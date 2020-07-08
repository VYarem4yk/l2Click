import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export const CharacterHealth = ({
  characterHealth,
  characterCurrentHealth,
  characterHealthRegeneration,
  basicHealthRegeneration,
}) => {
  useEffect(() => {
    const id = setInterval(() => {
      characterCurrentHealth < characterHealth &&
        characterHealthRegeneration(basicHealthRegeneration);
    }, 500);
    return () => clearInterval(id);
  }, [characterCurrentHealth]);

  const { characterHealthWrapper, textWrapper, curentHealth } = styles;

  return (
    <View style={characterHealthWrapper}>
      <View
        style={[
          curentHealth,
          { width: `${(characterCurrentHealth / characterHealth) * 100}%` },
        ]}
      />
      <View style={textWrapper}>
        <Text>
          {characterCurrentHealth}/{characterHealth}
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
  characterHealthWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(110, 1, 1, 0.6)",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 2,
  },
  curentHealth: {
    position: "absolute",

    height: "100%",
    backgroundColor: "rgba(251, 18, 18, 0.4)",
    borderRadius: 5,
  },
});

import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export const CharacterMana = ({
  characterMana,
  characterCurrentMana,
  characterManaRegeneration,
  basicManaRegeneration,
}) => {
  useEffect(() => {
    const id = setInterval(() => {
      characterCurrentMana < characterMana &&
        characterManaRegeneration(basicManaRegeneration);
    }, 2000);
    return () => clearInterval(id);
  }, [characterCurrentMana]);

  const { characterManaWrapper, curentMana, textWrapper } = styles;
  return (
    <View style={characterManaWrapper}>
      <View
        style={[
          curentMana,
          { width: `${(characterCurrentMana / characterMana) * 100}%` },
        ]}
      />
      <View style={textWrapper}>
        <Text>
          {characterCurrentMana}/{characterMana}
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
  characterManaWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(2, 16, 165, 0.3)",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 2,
  },
  curentMana: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(25, 43, 250, 0.4)",
    borderRadius: 5,
  },
});

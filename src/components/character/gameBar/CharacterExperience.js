import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export const CharacterExperience = ({
  levelsUpExperience,
  currentExperience,
}) => {
  const {
    textWrapper,
    characterExperienceWrapper,
    curentExperienceStyle,
  } = styles;

  const calculateCurrentExperiencePercent = (
    currentExperience,
    levelsUpExperience
  ) => {
    return (currentExperience * 100) / levelsUpExperience;
  };
  return (
    <View style={characterExperienceWrapper}>
      <View
        style={[
          curentExperienceStyle,
          {
            width: ` ${calculateCurrentExperiencePercent(
              currentExperience,
              levelsUpExperience
            )}%`,
          },
        ]}
      ></View>
      <View style={textWrapper}>
        <Text>
          {((currentExperience / levelsUpExperience) * 100).toFixed(2)} %
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
  characterExperienceWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(130, 131, 144, 0.8)",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 2,
  },
  curentExperienceStyle: {
    position: "absolute",
    height: "100%",
    backgroundColor: "rgba(178, 178, 178, 0.6)",
    borderRadius: 5,
  },
});

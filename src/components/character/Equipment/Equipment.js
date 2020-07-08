import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import { EQUIPMENT_BACKGROUND } from "./constants";
import { EQUIPMENT_LIST } from "../store/constants";

export const Equipment = ({ characterEquipment }) => {
  const { equipmentWrapper, equipmentCeil, iconStyle } = styles;
  return (
    <View style={equipmentWrapper}>
      {characterEquipment.map(({ name, equipmentId }) => {
        return (
          <View key={name} style={equipmentCeil}>
            <ImageBackground
              source={EQUIPMENT_BACKGROUND[name]}
              style={iconStyle}
            >
              {equipmentId && EQUIPMENT_LIST[name][equipmentId] && (
                <Image
                  source={EQUIPMENT_LIST[name][equipmentId].itemImage}
                  style={[iconStyle, { borderColor: "gold", borderWidth: 1 }]}
                />
              )}
            </ImageBackground>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  equipmentWrapper: {
    flex: 3,
    backgroundColor: "rgba(30, 15, 15, 0.8)",
    width: "100%",
    marginTop: 25,
    marginRight: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around",
  },
  equipmentCeil: {
    height: 55,
    width: 55,
  },
  iconStyle: {
    width: "100%",
    height: "100%",
  },
});

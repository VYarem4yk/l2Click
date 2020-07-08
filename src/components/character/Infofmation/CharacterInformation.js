import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export const CharacterInformation = () => {
  return (
    <View style={styles.informationWrapper}>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Атака</Text>
        <Text style={styles.informationText}>10</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Защита</Text>
        <Text style={styles.informationText}>20</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Крит</Text>
        <Text style={styles.informationText}>50</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Скор. Атаки</Text>
        <Text style={styles.informationText}>300</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Маг. Атака</Text>
        <Text style={styles.informationText}>154</Text>
      </View>
      <View style={styles.informationField}>
        <Text style={styles.informationText}>Скор. Отакта</Text>
        <Text style={styles.informationText}>520</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  informationWrapper: {
    flex: 2,
    backgroundColor: "rgba(30, 15, 15, 0.8)",
    marginTop: 25,
    marginHorizontal: 10,
    padding: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  informationField: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  informationText: {
    color: "white",
    fontWeight: "bold",
  },
});

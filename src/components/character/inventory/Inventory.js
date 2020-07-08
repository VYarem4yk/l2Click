import React from "react";
import { View, StyleSheet } from "react-native";
import { InventoryCeils } from "./InventoryCeils";

export const Inventory = ({ characterItemsInventory }) => {
  return (
    <View style={styles.inventoryStyle}>
      <InventoryCeils characterItemsInventory={characterItemsInventory} />
    </View>
  );
};

const styles = StyleSheet.create({
  inventoryStyle: {
    flex: 3,
    backgroundColor: "rgba(30, 15, 15, 0.8)",
    marginHorizontal: 22,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "94%",
    marginTop: 10,
    justifyContent: "space-around",
    alignContent: "space-between",

    marginBottom: 70,
  },
  equipmentCeil: {
    height: 55,
    width: 55,
    borderWidth: 1,
  },
  iconStyle: {
    borderWidth: 2,
    borderColor: "gold",
  },
});

import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import { ITEMS_LIST } from "../../character/store/constants";
import { Tooltip } from "react-native-elements";

export const InventoryCeils = ({ characterItemsInventory }) => {
  const {
    inventoryItemImageStyle,
    equipmentCeilStyle,
    notificationsStyle,
    itemInfoWrapper,
    itemInfoImage,
    itemInfoText,
  } = styles;
  return characterItemsInventory.map((itemId, index) => {
    return (
      <View key={itemId.id} style={equipmentCeilStyle}>
        <Tooltip
          popover={
            <View style={itemInfoWrapper}>
              <View style={itemInfoImage}>
                <Image
                  source={ITEMS_LIST[itemId.id].itemImage}
                  style={equipmentCeilStyle}
                />
              </View>
              <View style={itemInfoText}>
                <Text style={notificationsStyle}>
                  Name: {ITEMS_LIST[itemId.id].itemName}
                </Text>
                <Text style={notificationsStyle}>Quantity: {itemId.count}</Text>
                <Text style={notificationsStyle}>
                  Description: {ITEMS_LIST[itemId.id].itemUsage}
                </Text>
              </View>
            </View>
          }
          backgroundColor={null}
          width={300}
          height={100}
          withOverlay={false}
          pointerColor={"rgba(255, 128, 0, 0.5)"}
        >
          <ImageBackground
            source={ITEMS_LIST[itemId.id].itemImage}
            style={inventoryItemImageStyle}
          ></ImageBackground>
        </Tooltip>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  itemInfoWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "rgba(255, 128, 0, 0.5)",
    padding: 5,
  },
  equipmentCeilStyle: {
    height: 55,
    width: 55,
    borderWidth: 1,
  },
  inventoryItemImageStyle: { width: "100%", height: "100%" },
  notificationsStyle: {
    color: "rgb(255, 218, 179)",
  },
  itemInfoImage: {
    flex: 1,
    height: 55,
    width: 55,
    borderWidth: 1,
    marginRight: 10,
  },
  itemInfoText: {
    flex: 4,
  },
});

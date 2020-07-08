import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Tooltip } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ITEMS_LIST } from "../../character/store/constants";

export const EnemyInfo = ({ monsterName, monsterLevel, monsterDrop }) => {
  debugger;
  const {
    monsterInfoWrapper,
    levelWrapper,
    nameStyle,
    nameWrapper,
    dropInfoWrapper,
    dropItemInfoWrapper,
    dropItemInfoContainer,
    miniDropImage,
    dropItemNameStyle,
    infoSymbolStyle,
  } = styles;

  return (
    <View style={monsterInfoWrapper}>
      <View style={levelWrapper}>
        <Text style={nameStyle}>{monsterLevel}</Text>
      </View>
      <View>
        <Tooltip
          popover={
            <View style={dropInfoWrapper}>
              {monsterDrop.map((itemDrop) => {
                return (
                  <View
                    style={dropItemInfoContainer}
                    key={itemDrop.id + `container`}
                  >
                    <View
                      style={dropItemInfoWrapper}
                      key={itemDrop.id + `info`}
                    >
                      <Image
                        key={itemDrop.id + `image`}
                        style={miniDropImage}
                        source={ITEMS_LIST[itemDrop.id].itemImage}
                      />
                      <Text
                        key={itemDrop.id + `name`}
                        style={dropItemNameStyle}
                      >
                        {ITEMS_LIST[itemDrop.id].itemName}
                      </Text>
                    </View>

                    <Text style={dropItemNameStyle} key={itemDrop.id + `count`}>
                      {itemDrop.count}
                    </Text>
                  </View>
                );
              })}
            </View>
          }
          backgroundColor={null}
          height={200}
          width={300}
          withOverlay={false}
          withPointer={false}
        >
          <TouchableOpacity>
            <View style={nameWrapper}>
              <Text style={nameStyle}>{monsterName}</Text>
              <Text style={infoSymbolStyle}>ⓘ</Text>
            </View>
          </TouchableOpacity>
        </Tooltip>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  monsterInfoWrapper: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    marginVertical: 2,
  },

  nameWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "red",
    fontWeight: "bold",
  },

  nameStyle: {
    color: "red",
    fontWeight: "bold",
  },

  levelWrapper: {
    width: "15%",
    backgroundColor: "gray",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginRight: 5,
  },
  dropInfoWrapper: {
    width: 200,
    flexDirection: "column",
    justifyContent: "flex-end",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "rgba(8, 10, 11, 0.7)",
    padding: 5,
  },
  dropItemInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  miniDropImage: {
    width: 15,
    height: 15,
  },
  dropItemNameStyle: {
    paddingLeft: 5,
    color: "silver",
  },
  dropItemInfoWrapper: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  infoSymbolStyle: {
    fontSize: 10,
    color: "red",
  },
});

import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Equipment } from "../../components/character/Equipment/Equipment";
import { CHARACTER_BACKGROUND } from "./constatns";
import { CharacterInformation } from "../../components/character/Infofmation/CharacterInformation";
import { Inventory } from "../../components/character/inventory/Inventory";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { CharacterWrapper } from "./components/CharacterWrapper";

const Character = ({ characterItemsInventory, characterEquipment }) => {
  const { backgroundImage, characterWrapper } = styles;

  const [inventory, setInventory] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    setInventory(characterItemsInventory);
  }, [isFocused]);

  return (
    <CharacterWrapper>
      <ImageBackground source={CHARACTER_BACKGROUND} style={backgroundImage}>
        <View style={characterWrapper}>
          <CharacterInformation />
          <Equipment characterEquipment={characterEquipment} />
        </View>

        <Inventory characterItemsInventory={inventory} />
      </ImageBackground>
    </CharacterWrapper>
  );
};

const styles = StyleSheet.create({
  characterWrapper: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  characterItemsInventory: state.character.characterItemsInventory,
  characterEquipment: state.character.characterEquipment,
});

export default connect(mapStateToProps, {})(Character);

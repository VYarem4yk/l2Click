import React, { useEffect, useState } from "react";
import { Equipment } from "../../components/character/Equipment/Equipment";
import { CharacterInformation } from "../../components/character/Infofmation/CharacterInformation";
import { Inventory } from "../../components/character/inventory/Inventory";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { CharacterWrapper } from "./components/CharacterWrapper";
import { CharacterInfoWrapper } from "./components/CharacterInfoWrapper";

const Character = ({ character }) => {
  const {
    characterHealth,
    characterMana,
    characterPhysicalDamage,
    characterMagicalDefence,
    characterPhysicalDefence,
    characterItemsInventory,
    characterEquipment,
  } = character;

  const [inventory, setInventory] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    setInventory(characterItemsInventory);
  }, [isFocused]);

  return (
    <CharacterWrapper>
      <CharacterInfoWrapper>
        <CharacterInformation />
        <Equipment characterEquipment={characterEquipment} />
      </CharacterInfoWrapper>
      <Inventory characterItemsInventory={inventory} />
    </CharacterWrapper>
  );
};

const mapStateToProps = (state) => ({
  character: state.character,
});

export default connect(mapStateToProps, null)(Character);

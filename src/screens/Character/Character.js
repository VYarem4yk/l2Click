import React, { useEffect, useState } from "react";
import { Equipment } from "../../components/character/Equipment/Equipment";
import { CharacterInformation } from "../../components/character/Infofmation/CharacterInformation";
import { Inventory } from "../../components/character/inventory/Inventory";
import { connect } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { CharacterWrapper } from "./components/CharacterWrapper";
import { CharacterInfoWrapper } from "./components/CharacterInfoWrapper";
import { wearItem } from "../../components/character/store/actions";

const Character = ({ character, wearItem }) => {
  const {
    characterPhysicalDamage,
    characterMagicalDamage,
    characterMagicalDefence,
    characterPhysicalDefence,
    characterAttackSpeed,
    characterSkillRecoverySpeed,
    characterCriticalChance,
    characterItemsInventory,
    characterEquipment,
  } = character;

  const [inventory, setInventory] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    setInventory(characterItemsInventory);
  });

  return (
    <CharacterWrapper>
      <CharacterInfoWrapper>
        <CharacterInformation
          characterPhysicalDamage={characterPhysicalDamage}
          characterMagicalDamage={characterMagicalDamage}
          characterMagicalDefence={characterMagicalDefence}
          characterPhysicalDefence={characterPhysicalDefence}
          characterAttackSpeed={characterAttackSpeed}
          characterSkillRecoverySpeed={characterSkillRecoverySpeed}
          characterCriticalChance={characterCriticalChance}
        />
        <Equipment
          characterEquipment={characterEquipment}
          wearItem={wearItem}
        />
      </CharacterInfoWrapper>
      <Inventory characterItemsInventory={inventory} />
    </CharacterWrapper>
  );
};

const mapStateToProps = (state) => ({
  character: state.character,
});

export default connect(mapStateToProps, { wearItem })(Character);

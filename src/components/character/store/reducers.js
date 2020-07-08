import {
  SET_CHARACTER_LEVEL,
  SKILLS,
  LEVELS_UP_EXPERIENCE,
  PICK_UP_DROPPED_ITEM,
  CHARACTER_RECEIVE_DAMAGE,
  CHARACTER_RESSURECTION,
  CHARACTER_HEALTH_REGENERATION,
  CHARACTER_MANA_REGENERATION,
  EQUIP_ITEM,
} from "./constants";

const initialState = {
  characterSkills: SKILLS,
  levelsUpExperience: LEVELS_UP_EXPERIENCE,
  characterLevel: 1,
  characterHealth: 150,
  characterCurrentHealth: 150,
  basicHealthRegeneration: 1,
  basicManaRegeneration: 1,
  characterMana: 50,
  characterCurrentMana: 50,
  characterPhysicalDamage: 30,
  characterMagicalDefence: 47,
  characterPhysicalDefence: 72,
  characterItemsInventory: [{ id: "id_0", count: 0 }],
  characterEquipment: [
    { name: "EARRING", equipmentId: "id_0" },
    { name: "HELMET", equipmentId: "id_0" },
    { name: "NECKLACE", equipmentId: "id_0" },
    { name: "WEAPON", equipmentId: "id_0" },
    { name: "ARMOR", equipmentId: "id_0" },
    { name: "SHIELD", equipmentId: "id_0" },
    { name: "GLOVES", equipmentId: "id_0" },
    { name: "PANTS", equipmentId: "id_0" },
    { name: "BOOTS", equipmentId: "id_0" },
  ],
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_LEVEL: {
      return {
        ...state,
        characterLevel: state.characterLevel + 1,
        characterCurrentMana: state.characterMana,
        characterCurrentHealth: state.characterHealth,
      };
    }

    case CHARACTER_RESSURECTION: {
      return {
        ...state,
        characterCurrentHealth: state.characterHealth * 0.7,
      };
    }

    case CHARACTER_RECEIVE_DAMAGE: {
      return {
        ...state,
        characterCurrentHealth:
          state.characterCurrentHealth - action.monsterDamage,
      };
    }

    case CHARACTER_HEALTH_REGENERATION: {
      return {
        ...state,
        characterCurrentHealth:
          action.healthRecoveryAmount <=
          state.characterHealth - state.characterCurrentHealth
            ? state.characterCurrentHealth + action.healthRecoveryAmount
            : state.characterHealth,
      };
    }

    case CHARACTER_MANA_REGENERATION: {
      return {
        ...state,
        characterCurrentMana:
          action.manaRecoveryAmount <=
          state.characterMana - state.characterCurrentMana
            ? state.characterCurrentMana + action.manaRecoveryAmount
            : state.characterMana,
      };
    }

    case EQUIP_ITEM: {
      return {
        ...state,
        characterCurrentMana:
          action.manaRecoveryAmount <=
          state.characterMana - state.characterCurrentMana
            ? state.characterCurrentMana + action.manaRecoveryAmount
            : state.characterMana,
      };
    }

    case PICK_UP_DROPPED_ITEM: {
      console.log("action.item", action.item);
      let result = [];
      action.item.map((dropItem) => {
        const indexOfStackedItem = state.characterItemsInventory.findIndex(
          (item) => item.id === dropItem.id
        );
        if (indexOfStackedItem >= 0) {
          result = state.characterItemsInventory;

          result[indexOfStackedItem].count += dropItem.count;
        } else {
          result = [...result, dropItem];
        }
      });
      return {
        ...state,
        characterItemsInventory: result,
      };
    }

    default:
      return state;
  }
};

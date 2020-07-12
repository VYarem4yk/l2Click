import {
  SET_CHARACTER_LEVEL,
  SKILLS,
  LEVELS_UP_EXPERIENCE,
  PICK_UP_DROPPED_ITEM,
  CHARACTER_RECEIVE_DAMAGE,
  CHARACTER_RESSURECTION,
  CHARACTER_HEALTH_REGENERATION,
  CHARACTER_MANA_REGENERATION,
  WEAR_ITEM,
  USE_SKILL_HEAL,
} from "./constants";

const initialState = {
  characterSkills: SKILLS,
  levelsUpExperience: LEVELS_UP_EXPERIENCE,
  characterLevel: 1,
  characterHealth: 110,
  characterCurrentHealth: 110,
  basicHealthRegeneration: 5,
  basicManaRegeneration: 1,
  characterMana: 50,
  characterCurrentMana: 50,
  characterPhysicalDamage: 10,
  characterMagicalDamage: 4,
  characterMagicalDefence: 47,
  characterPhysicalDefence: 72,
  characterAttackSpeed: 330,
  characterSkillRecoverySpeed: 213,
  characterCriticalChance: 44,

  characterItemsInventory: [
    { id: "id_0", count: 0 },
    { id: "id_7", count: 500 },
    { id: "id_99", count: 500 },
  ],
  characterEquipment: [
    { name: "EARRING", equipmentId: "id_1003" },
    { name: "HELMET", equipmentId: "id_1006" },
    { name: "NECKLACE", equipmentId: "id_1009" },
    { name: "WEAPON", equipmentId: "id_1000" },
    { name: "ARMOR", equipmentId: "id_1012" },
    { name: "SHIELD", equipmentId: "id_1015" },
    { name: "GLOVES", equipmentId: "id_1018" },
    { name: "PANTS", equipmentId: "id_1021" },
    { name: "BOOTS", equipmentId: "id_1024" },
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
        characterPhysicalDamage: state.characterPhysicalDamage + 1,
        characterMagicalDamage: state.characterMagicalDamage + 1,
        characterMagicalDefence: state.characterMagicalDefence + 10,
        characterPhysicalDefence: state.characterPhysicalDefence + 11,
        characterAttackSpeed: state.characterAttackSpeed + 50,
        characterSkillRecoverySpeed: state.characterSkillRecoverySpeed + 50,
        characterCriticalChance: state.characterCriticalChance + 2,
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
    // "ЭТО У ТЕБЯ СНИМАЕТ ПРЕДМЕТЫ А НЕ WEAR( одевать) "
    case WEAR_ITEM: {
      return {
        ...state,
        characterItemsInventory: [
          ...state.characterItemsInventory,
          { id: action.equipmentId, count: 1 },
        ],
        characterEquipment: state.characterEquipment.map((item) => {
          if (item.name == action.name) {
            return (item = { name: item.name, equipmentId: null });
          } else return (item = item);
        }),
      };
    }

    case USE_SKILL_HEAL: {
      if (state.characterCurrentMana - action.manaConsumption >= 0) {
        if (
          state.characterCurrentHealth + action.healAmount <=
          state.characterHealth
        ) {
          return {
            ...state,
            characterCurrentMana:
              state.characterCurrentMana - action.manaConsumption,
            characterCurrentHealth:
              state.characterCurrentHealth + action.healAmount,
          };
        } else {
          return { ...state };
        }
      } else {
        return { ...state };
      }
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

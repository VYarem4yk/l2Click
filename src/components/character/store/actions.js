import {
  SET_CHARACTER_LEVEL,
  PICK_UP_DROPPED_ITEM,
  CHARACTER_RECEIVE_DAMAGE,
  CHARACTER_RESSURECTION,
  CHARACTER_HEALTH_REGENERATION,
  CHARACTER_MANA_REGENERATION,
  EQUIP_ITEM,
} from "./constants";

export const setCharacterLevel = () => ({
  type: SET_CHARACTER_LEVEL,
});

export const pickUpDrop = (item) => ({
  type: PICK_UP_DROPPED_ITEM,
  item,
});

export const characterReceiveDamage = (monsterDamage) => ({
  type: CHARACTER_RECEIVE_DAMAGE,
  monsterDamage,
});

export const characterRessurection = () => ({
  type: CHARACTER_RESSURECTION,
});

export const characterHealthRegeneration = (healthRecoveryAmount) => ({
  type: CHARACTER_HEALTH_REGENERATION,
  healthRecoveryAmount,
});

export const characterManaRegeneration = (manaRecoveryAmount) => ({
  type: CHARACTER_MANA_REGENERATION,
  manaRecoveryAmount,
});

export const equipItem = (item) => ({
  type: EQUIP_ITEM,
  item,
});

import { SET_MONSTER_ID, SET_MONSTER_KILLED } from "./constants";

export const setMonsterId = (monsterId) => ({
  type: SET_MONSTER_ID,
  monsterId: monsterId,
});

export const setMonsterKilled = (killedStatus) => ({
  type: SET_MONSTER_KILLED,
  killedStatus: killedStatus,
});

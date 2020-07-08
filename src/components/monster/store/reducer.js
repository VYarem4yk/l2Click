import { SET_MONSTER_ID, MONSTERS, SET_MONSTER_KILLED } from "./constants";

let initialState = {
  monsters: MONSTERS,
  monsterId: 0,
  monsterIsKilled: false,
};

export const monsterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONSTER_ID: {
      return { ...state, monsterId: action.monsterId };
    }
    case SET_MONSTER_KILLED: {
      return { ...state, monsterIsKilled: action.killedStatus };
    }

    default:
      return state;
  }
};

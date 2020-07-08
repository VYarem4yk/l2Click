import { createStore, combineReducers } from "redux";
import { monsterReducer } from "../src/components/monster/store/reducer";
import { characterReducer } from "../src/components/character/store/reducers";

let reducers = combineReducers({
  monster: monsterReducer,
  character: characterReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

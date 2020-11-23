import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { birdReducer } from "./birds";
import { themeReducer } from "./theme";

const configureStore = () => {
  const store = createStore(
    combineReducers({ birds: birdReducer, theme: themeReducer }),
    applyMiddleware(thunk)
  );
  return store;
};

export { configureStore };

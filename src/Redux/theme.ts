import { CHANGE_THEME, SET_THEME } from "./actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = { dark: false };

export const themeReducer = (
  state = initialState,
  action: { type: String; payload: Boolean }
) => {
  switch (action.type) {
    case CHANGE_THEME:
      AsyncStorage.setItem("theme", JSON.stringify(!state.dark));
      return { ...state, dark: !state.dark };

    case SET_THEME:
      AsyncStorage.setItem("theme", JSON.stringify(action.payload));
      return { ...state, dark: action.payload };

    default:
      return state;
  }
};

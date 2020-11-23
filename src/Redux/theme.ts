import { CHANGE_THEME, SET_THEME } from "./actionTypes";

const initialState = { dark: false };

export const themeReducer = (
  state = initialState,
  action: { type: String; payload: Boolean }
) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, dark: !state.dark };

    case SET_THEME:
      return { ...state, dark: action.payload };

    default:
      return state;
  }
};

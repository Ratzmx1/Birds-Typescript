import { ADD_BIRDS } from "./actionTypes";

import { Reducer } from "redux";

const initialState = { birds: [] };

export const birdReducer: Reducer = (
  state = initialState,
  action: { type: String; payload: [] }
) => {
  switch (action.type) {
    case ADD_BIRDS:
      return { ...state, birds: action.payload };

    default:
      return state;
  }
};

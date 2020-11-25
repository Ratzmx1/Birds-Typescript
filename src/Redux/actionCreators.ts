import axios from "axios";
import { ADD_BIRDS, CHANGE_THEME, SET_THEME } from "./actionTypes";
import { baseUrl } from "../Extras/baseUrl";

export const fetchBirds = () => (dispatch) => {
  return axios
    .get(`${baseUrl}/birds`)
    .then((res) => res.data)
    .then((data) => {
      return dispatch(addBird(data));
    })
    .catch((e) => console.error(e));
};

export const addBird = (bird: []) => {
  return { type: ADD_BIRDS, payload: bird };
};

export const changeTheme = () => {
  return { type: CHANGE_THEME };
};

export const setTheme = (theme: Boolean) => {
  return { type: SET_THEME, payload: theme };
};

interface birdsData {
  name: { english: String; latin: String; spanish: String };
  images: { main: String };
  uid: String;
  sort: Number;
}

export interface initialState {
  birds: { bird: Array<{ birdsData }> };
  theme: { dark: Boolean };
}

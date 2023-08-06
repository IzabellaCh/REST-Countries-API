import {
  SET_COUNRTY,
  SET_LOADING,
  SET_ERROR,
  CLEAR_DETAILS,
  SET_NEIGHBORS,
} from "./details-actions";

const initialState = {
  currentCountry: null,
  staus: "idle",
  error: null,
  neighbors: [],
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        state: "reject",
        error: payload,
      };
    case CLEAR_DETAILS:
      return initialState;
    case SET_COUNRTY:
      return {
        ...state,
        status: "received",
        currentCountry: payload,
      };
    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      };
    default:
      return state;
  }
};

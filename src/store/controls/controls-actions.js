export const SET_SEARCH = "@@conrtols/SET_SEARCH";
export const SET_REGION = "@@conrtols/SET_REGION";
export const CLEAR_CONTROLS = "@@conrtols/CLEAR_CONTROLS";

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});

export const clearControls = () => ({
  type: CLEAR_CONTROLS,
});

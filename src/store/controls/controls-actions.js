export const SET_SEARCH = "@@conrtols/SET_SEARCH";
export const SET_REGION = "@@conrtols/SET_REGION";

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});

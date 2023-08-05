export const selectedCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.length,
});

export const selectALLCountries = (state) => state.countries.list;

export const selectVisibleCounties = (state, { search = "" }) => {
  return state.countries.list.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
};

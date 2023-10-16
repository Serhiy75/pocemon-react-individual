const { createSlice } = require('@reduxjs/toolkit');

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    pocemons: [],
    heroes: [],
  },
  reducers: {
    addPocemon(state, action) {
      state.pocemons.push(action.payload);
    },
    deletePocemon(state, action) {
      state.pocemons = state.pocemons.filter(
        pocemon => pocemon.id !== action.payload
      );
    },
  },
});

export const { addPocemon, deletePocemon } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;

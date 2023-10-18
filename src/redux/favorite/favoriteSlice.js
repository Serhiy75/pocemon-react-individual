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
    addHero(state, action) {
      state.heroes.push(action.payload);
    },
    deleteHero(state, action) {
      state.heroes = state.heroes.filter(hero => hero.id !== action.payload);
    },
    deleteAllPocemons(state) {
      state.pocemons = [];
    },
    deleteAllHeroes(state) {
      state.heroes = [];
    },
  },
});

export const {
  addPocemon,
  deletePocemon,
  addHero,
  deleteHero,
  deleteAllPocemons,
  deleteAllHeroes,
} = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;

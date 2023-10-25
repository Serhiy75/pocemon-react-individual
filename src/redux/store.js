import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoriteReducer } from './favorite/favoriteSlice';
import { filterSlice } from './contacts/filterSlice';
import { contactSlice } from './contacts/contactSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistFavoriteConfig = {
  key: 'favorite',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedFavoriteReducer = persistReducer(
  persistFavoriteConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    favorite: persistedFavoriteReducer,
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

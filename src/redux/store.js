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
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

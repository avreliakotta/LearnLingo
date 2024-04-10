import { configureStore } from '@reduxjs/toolkit';
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
import { teachersReducer } from './teachers/teachers-slice';
import { authReducer } from './auth/auth-slice';

const persistTeacherstConfig = {
  key: 'teachers',
  storage,
};
const persistAuthConfig = {
  key: 'auth',
  storage,
};

const persistedTeachersReducer = persistReducer(
  persistTeacherstConfig,
  teachersReducer
);
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    teachers: persistedTeachersReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

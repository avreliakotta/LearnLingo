import { configureStore } from "@reduxjs/toolkit";
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
import storage from 'redux-persist/lib/storage'
import {teachersReducer} from "./teachers/teachers-slice";
const persisTeacherstConfig = {
  key: 'teachers',
  storage,
  whitelist: ['favorites', 'page'],
}
const persistedTeachersReducer=persistReducer(persisTeacherstConfig,teachersReducer)
 export const store = configureStore({
  reducer:{
    teachers:persistedTeachersReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
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
import { authReducer} from "./auth/auth-slice";
import {bookingReducer} from "./booking/booking-slice";
const persistTeacherstConfig = {
  key: 'teachers',
  storage,

}
const persistAuthConfig={
  key:"auth",
  storage,
}
const persistBookingConfig={
  key:"booking",
  storage
}
const persistedTeachersReducer=persistReducer(persistTeacherstConfig,teachersReducer);
const persistedAuthReducer=persistReducer(persistAuthConfig,authReducer);
const persistedBookingReducer=persistReducer(persistBookingConfig,bookingReducer)
 export const store = configureStore({
  reducer:{
    teachers:persistedTeachersReducer,
    auth:persistedAuthReducer,
    booking:persistedBookingReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
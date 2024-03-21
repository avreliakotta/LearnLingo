import { configureStore } from "@reduxjs/toolkit";

import {teachersReducer} from "./teachers/teachers-slice";

 export const store = configureStore({
  reducer:{
    teachers:teachersReducer,
  },
});
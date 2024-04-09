import { createSlice } from '@reduxjs/toolkit';
import {bookLesson} from "./booking-operation";
const initialState= {
    loading: false,
    error: null,
    success: false,
    bookingData: null 
  }
const bookingSlice=createSlice({
    name:"booking",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(bookLesson.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
          })
          .addCase(bookLesson.fulfilled, (state,{payload}) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.bookingData = payload; 
          })
          .addCase(bookLesson.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
            state.success = false;
          });
      }
     
})
export const bookingReducer=bookingSlice.reducer;
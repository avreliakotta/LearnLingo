import { createSlice } from "@reduxjs/toolkit";
import {fetchAll} from "./teachers-operations";
const initialState={
    items:[],
    bookings: null,
    favorites:[],
    loading:false,
    error:null,
    
}
const teachersSlice = createSlice({
    name:"teachers",
    initialState,
    reducers:{
      addToFavorites: (state,{payload}) => {
        return {
          ...state,
          favorites: [...state.favorites, payload],
        };
      },
      removeFromFavorites: (state, {payload}) => {
        return {
          ...state,
          favorites: state.favorites.filter((favorite) => favorite.id !== payload.id),
        };
      },
      addBooking: (state, { payload }) => {
        return {
          ...state,
          bookings: [...state.bookings, payload],
        };
      },
      removeBooking: (state, { payload }) => {
        return {
          ...state,
          bookings: state.bookings.filter(booking => booking.teacherId !== payload.teacherId),
        }
      }
    },
    
    extraReducers: builder => {
        builder
        .addCase(fetchAll.pending, state => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchAll.fulfilled, (state,{payload}) => {
            state.loading = false;
            state.items=payload;
            state.error = null;
})
.addCase(fetchAll.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload;
  });
    },
    })

export const { addToFavorites, removeFromFavorites, addBooking,removeBooking}= teachersSlice.actions;
export const teachersReducer=teachersSlice.reducer;
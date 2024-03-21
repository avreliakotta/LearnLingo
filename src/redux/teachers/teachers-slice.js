import { createSlice } from "@reduxjs/toolkit";
import {fetchAll} from "./teachers-operations";
const initialState={
    items:[],
    loading:false,
    error:null
}
const teachersSlice = createSlice({
    name:"teachers",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchAll.pending, state => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchAll.fulfilled, (state,action) => {
            state.loading = false;
            state.items= action.payload;
            state.error = null;
})
.addCase(fetchAll.rejected, (state, { payload }) => {
    state.loading = false;
    state.error = payload;
  })
}
})
export const teachersReducer=teachersSlice.reducer;
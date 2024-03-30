import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './auth-operations';
const initialState = {
  user: null,
  isAuth : false,
  error: null,
  loading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
reducers:{
logoutUser(state){
  state.user=null;
  state.isAuth = false;
}
},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.isAuth = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.isAuth = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export  const{logoutUser}= authSlice.actions;
export const authReducer = authSlice.reducer;

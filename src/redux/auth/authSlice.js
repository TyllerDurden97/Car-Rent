import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './thunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  userLoggedIn: false,
  userRefreshing: false,
};
   
const authSlice = createSlice({
  name: 'auth',
  initialState,
   extraReducers: builder =>
      builder
         .addCase(register.pending, (state, action) => state)
         .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.userLoggedIn = true;}) 
         .addCase(register.rejected, (state, action) => state)
   .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.userLoggedIn = true;}) 
         .addCase(logIn.rejected, (state, action) => state)
         .addCase(logOut.fulfilled, (state, action) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.userLoggedIn = false;}) 
         .addCase(logOut.rejected, (state, action) => state)
         .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.userLoggedIn = true;
            state.userRefreshing = false;}) 
         .addCase(refreshUser.rejected, (state, action) => {
            state.userRefreshing = false;})

//   {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.userLoggedIn = true;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.userLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.userLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.userRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.userLoggedIn = true;
//       state.userRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.userRefreshing = false;
//     },
//   },
});

export const authReducer = authSlice.reducer;

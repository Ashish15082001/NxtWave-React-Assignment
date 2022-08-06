import { createSlice } from "@reduxjs/toolkit";

export const userStatus = { loggedIn: "loggenIn", loggedOut: "loggedout" };

const initialState = { userData: null, status: userStatus.loggedOut };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action) {
      const { userData } = action.payload;
      state.userData = userData;
      state.status = userStatus.loggedIn;
    },
    logOut(state) {
      state.userData = null;
      state.status = userStatus.loggedOut;
    },
  },
});

export const userSliceReducer = userSlice.reducer;

export const { logIn, logOut } = userSlice.actions;

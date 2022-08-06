import { createSlice } from "@reduxjs/toolkit";

export const resourcesStatus = { loading: "loading", idle: "idle" };

const initialState = { resources: [], status: resourcesStatus.idle };

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setResources(state, action) {
      const { resources } = action.payload;
      state.resources = resources;
    },
    changeResourceState(state, action) {
      const { status } = action.payload;
      state.status = status;
    },
  },
});

export const resourcesSliceReducer = resourcesSlice.reducer;

export const { setResources, changeResourceState } = resourcesSlice.actions;

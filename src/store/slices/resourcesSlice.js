import { createSlice } from "@reduxjs/toolkit";

export const resourcesStatus = { loading: "loading", idle: "idle" };

const initialState = { entities: [], status: resourcesStatus.idle };

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setResources(state, action) {
      const { entities } = action.payload;
      state.entities = entities;
    },
    changeResourceStatus(state, action) {
      const { status } = action.payload;
      state.status = status;
    },
  },
});

export const resourcesSliceReducer = resourcesSlice.reducer;

export const { setResources, changeResourceStatus } = resourcesSlice.actions;

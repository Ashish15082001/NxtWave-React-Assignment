import { createSlice } from "@reduxjs/toolkit";

export const resourcesDetailsStatus = { loading: "loading", idle: "idle" };

const initialState = { entities: {}, status: resourcesDetailsStatus.idle };

export const resourcesDetailsSlice = createSlice({
  name: "resourcesDetails",
  initialState,
  reducers: {
    setResourcesDetails(state, action) {
      const { entity } = action.payload;
      state.entities[entity.id] = entity;
    },
    changeResourcesDetailsStatus(state, action) {
      const { status } = action.payload;
      state.status = status;
    },
    updateResourceDetails(state, action) {
      const { id, resourceItems } = action.payload;
      state.entities[id].resource_items = resourceItems;
    },
  },
});

export const resourcesDetailsSliceReducer = resourcesDetailsSlice.reducer;

export const {
  setResourcesDetails,
  changeResourcesDetailsStatus,
  updateResourceDetails,
} = resourcesDetailsSlice.actions;

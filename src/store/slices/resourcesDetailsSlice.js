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
      const { id, deletedResourceItemsIds } = action.payload;
      const updatedResourceItems = state.entities[id].resource_items.filter(
        (resourceItem) =>
          !deletedResourceItemsIds.some(
            (deletedResourceItemId) => deletedResourceItemId === resourceItem.id
          )
      );

      state.entities[id].resource_items = updatedResourceItems;
    },
    addNewItemToResourceDetails(state, action) {
      const { id, deletedSourceItemsIds } = action.payload;
      console.log(id);
      console.log(deletedSourceItemsIds);
      // for (let key in state.entities)
      //   if (state.entities[key].title === item.resourceName) {
      //     state.entities[key].resource_items.push({
      //       id: Math.random().toString(),
      //       link: item.link,
      //       title: item.itemName,
      //       createdAt: new Date().toISOString(),
      //       description: item.description,
      //     });
      //     break;
      //   }
    },
  },
});

export const resourcesDetailsSliceReducer = resourcesDetailsSlice.reducer;

export const {
  setResourcesDetails,
  changeResourcesDetailsStatus,
  updateResourceDetails,
  addNewItemToResourceDetails,
} = resourcesDetailsSlice.actions;

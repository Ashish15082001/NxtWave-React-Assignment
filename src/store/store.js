import { configureStore } from "@reduxjs/toolkit";
import { resourcesDetailsSliceReducer } from "./slices/resourcesDetailsSlice";
import { resourcesSliceReducer } from "./slices/resourcesSlice";

export const store = configureStore({
  reducer: {
    resources: resourcesSliceReducer,
    resourcesDetails: resourcesDetailsSliceReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { resourcesSliceReducer } from "./slices/resources";

export const store = configureStore({
  reducer: {
    resources: resourcesSliceReducer,
  },
});

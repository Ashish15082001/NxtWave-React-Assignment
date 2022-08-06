import { configureStore } from "@reduxjs/toolkit";
import { resourcesDetailsSliceReducer } from "./slices/resourcesDetailsSlice";
import { resourcesSliceReducer } from "./slices/resourcesSlice";
import { userSliceReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    resources: resourcesSliceReducer,
    resourcesDetails: resourcesDetailsSliceReducer,
    user: userSliceReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import {upsaApi} from "../api/api";

const store = configureStore({
  reducer: {
    [upsaApi.reducerPath]: upsaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(upsaApi.middleware),
})
export default store;
import { configureStore } from '@reduxjs/toolkit';

import orderReducer from "./slices/orderSlice";
import newClientReducer from "./slices/newClientSlice";

export const store = configureStore({
  reducer: {
      order: orderReducer,
      newClient: newClientReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/user/userSlice";
import clientReducer from "@/features/clients/clientSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      clients: clientReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

import { configureStore } from "@reduxjs/toolkit";
import { storeApi } from "./storeApi";

export const storeRedux = configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware)
})
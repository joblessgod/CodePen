import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./compilerSlice";
import { api } from "./api";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        compilerSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
    //  CONCEPT //
    // we have default middeware inside of "./api". What we done here is: we get that default middleware and connected this middleware with that default like connecting new mouse wih old laptop /what a great joke - just laugh at this very bad joke/
})

export type RootState = ReturnType<typeof store.getState>
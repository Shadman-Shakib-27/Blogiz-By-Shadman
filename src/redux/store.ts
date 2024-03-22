import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/* Steps To Create And Setup Redux With Next JS App */

// 1.) First, Redux Toolkit Site & Choose Quick Start.
// 2.) Then, Install The Command.
// 3.) Then Create store.ts.
// 4.) Then Create Provider And Wrap Whole File With Providers.
// 5.) Then Go To RTK Query Overview.

/* Steps To Create And Setup Redux With Next JS App */

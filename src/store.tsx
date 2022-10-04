import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/todoSlice";
export const store = configureStore({
  reducer: {
    todotasks: todoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

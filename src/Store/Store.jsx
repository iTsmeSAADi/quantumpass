import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slice/AuthSlice";
import PostSlice from "./Slice/PostSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    post:PostSlice,
  },
});

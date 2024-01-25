import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "PostSlice",
  initialState: {
    loading: false,
    postData: null,
    isError: false,
  },
  reducers: {
    setPostData: (state, action) => {
      state.loading = true;
      state.postData = action.payload;
      state.isError = false;
    },
    setPostError: (state, action) => {
      state.loading = false;
      state.postData = null;
      state.isError = true;
    },
  },
});

export const { setPostData, setPostError } = PostSlice.actions;
export default PostSlice.reducer;

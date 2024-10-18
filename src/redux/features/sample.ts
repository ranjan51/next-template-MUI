import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postVideo: any = createAsyncThunk(
  "post/add",
  async (payload: any) => {
    try {
   
    } catch (error: any) {
      return error;
    }
  },
);
//#endregion

//#region define initial state for slice
const initialState = {
  vidData: [],
  isLoading: false,
  error: "",
};
//#endregion

//#region define slice to post video
const postVideoSl = createSlice({
  name: "Videos",
  initialState,
  reducers: {
    reset: (state) => {
      state.vidData = [];
      state.isLoading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postVideo.fulfilled, (state, action) => {
        state.vidData = action?.payload;
        state.isLoading = false;
      })
      .addCase(postVideo.pending, (state) => {
        state.vidData = [];
        state.isLoading = true;
      })
      .addCase(postVideo.rejected, (state, action) => {
        state.vidData = [];
        state.isLoading = false;
        state.error = "";
      });
  },
});
//#endregion
export const PostVideoSlice = postVideoSl.reducer;

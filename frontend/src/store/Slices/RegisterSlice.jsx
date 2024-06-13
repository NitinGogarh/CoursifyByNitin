import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import RegisterHandle from "../Thunks/RegisterHandle";
import LoginHandle from "../Thunks/LoginHandle";


const initialState = {
  loading: true,
  user: null,
  msg: null,
  error: null,
};


const registerSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers:{
      emptyState(state,action)
      {
        return {
          loading: true,
          user: null,
          msg: null,
          error: null,};
      }
  },
  extraReducers(builder) {
    builder
      .addCase(RegisterHandle.pending, (state) => {
         state.user = null;
         state.loading = true;
         state.error = null;
         state.msg = null;
      })
      .addCase(RegisterHandle.fulfilled, (state, action) => {
        return {
          user: action.payload.data,
          loading: false,
          error: null,
          msg: action.payload.msg,
        };
      })
      .addCase(RegisterHandle.rejected, (state, action) => {
        state.user = null;
         state.loading = false;
         state.msg = "Internal Server Error";
        state.error = action.payload;
      });
  },
/*restart */
  extraReducers(builder) {
    builder
      .addCase(LoginHandle.pending, (state) => {
         state.user = null;
         state.loading = true;
         state.error = null;
         state.msg = null;
      })
      .addCase(LoginHandle.fulfilled, (state, action) => {
        return {
          user: action.payload.data,
          loading: false,
          error: null,
          msg: action.payload.msg,
        };
      })
      .addCase(LoginHandle.rejected, (state, action) => {
        state.user = null;
         state.loading = false;
         state.msg = "Internal Server Error";
        state.error = action.payload;
      });
  },
});

export const {emptyState} = registerSlice.actions;
export default registerSlice.reducer;

import {  createSlice } from "@reduxjs/toolkit";
import enrollHandle from "../Thunks/enrollHandle";



const initialState = {
  loading: true,
  user: null,
  error: null,
};


const enrollSlice = createSlice({
  name: "enrollSlice",
  initialState,
  reducers:{
      
  },
  extraReducers(builder) {
    builder.addCase(enrollHandle.pending,(state)=>{
          state.loading = true
    })
    .addCase(enrollHandle.fulfilled,(state,action)=>{
          state.loading  = false,
          state.user = action.payload
    })
    .addCase(enrollHandle.rejected,(state,action)=>{
         state.error = action.payload
    })
    
  },

});

export const {} = enrollSlice.actions;
export default enrollSlice.reducer;
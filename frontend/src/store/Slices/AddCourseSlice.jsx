import {  createSlice } from "@reduxjs/toolkit";
import addCoursesHandle from "../Thunks/addCoursesHandle";


const initialState = {
  loading: true,
  user: null,
  error: null,
};


const addCoursesSlice = createSlice({
  name: "addCoursesSlice",
  initialState,
  reducers:{
      
  },
  extraReducers(builder) {
    builder.addCase(addCoursesHandle.pending,(state)=>{
          state.loading = true
    })
    .addCase(addCoursesHandle.fulfilled,(state,action)=>{
          state.loading  = false,
          state.user = action.payload
    })
    .addCase(addCoursesHandle.rejected,(state,action)=>{
         state.error = action.payload
    })
    
  },

});

export const {} = addCoursesSlice.actions;
export default addCoursesSlice.reducer;

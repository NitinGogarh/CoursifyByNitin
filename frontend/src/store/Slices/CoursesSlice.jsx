import {  createSlice } from "@reduxjs/toolkit";
import CoursesHandle from "../Thunks/CoursesHandle";

const initialState = {
  loading: true,
  user: null,
  error: null,
};


const CoursesSlice = createSlice({
  name: "CoursesSlice",
  initialState,
  reducers:{
      emptyCourses(){
        return {}
      }
  },
  extraReducers(builder) {
    builder.addCase(CoursesHandle.pending,(state)=>{
          state.loading = true
    })
    .addCase(CoursesHandle.fulfilled,(state,action)=>{
          state.loading  = false,
          state.user = action.payload
    })
    .addCase(CoursesHandle.rejected,(state,action)=>{
         state.error = action.payload
    })
    
  },

});

export const {emptyCourses} = CoursesSlice.actions;
export default CoursesSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import RegisterSlice from './Slices/RegisterSlice'
import CoursesSlice from './Slices/CoursesSlice'
import addCoursesSlice from './Slices/AddCourseSlice'
import enrollSlice from './Slices/enrollSlice'
 const store = configureStore({
  reducer: {
    RegisterSlice,
    CoursesSlice,
   addCoursesSlice,
   enrollSlice,
  },
})
export default store

import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const  addCoursesHandle = createAsyncThunk(
    "/addCourses",
    async (email) => {
      console.log(email)
      try {
       const response = await axios.get(`http://localhost:8000/courses/addcourses/${email}`)
      
       return response.data.courses
       
      } catch (error) {
        console.log(error)
        return null;
      }
    }
  );
  export default addCoursesHandle
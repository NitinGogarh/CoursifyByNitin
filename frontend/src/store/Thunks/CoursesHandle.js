import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const  CoursesHandle = createAsyncThunk(
    "/courses",
    async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/courses",
        );
      
        return  response.data;
      } catch (error) {
        return  null;
      }
    }
  );
  export default CoursesHandle
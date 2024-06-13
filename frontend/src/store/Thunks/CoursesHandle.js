import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const  CoursesHandle = createAsyncThunk(
    "/courses",
    async () => {
      try {
        const response = await axios.get(
          "https://coursifybynitin-production-5b9e.up.railway.app/courses",
        );
      
        return  response.data;
      } catch (error) {
        return  null;
      }
    }
  );
  export default CoursesHandle
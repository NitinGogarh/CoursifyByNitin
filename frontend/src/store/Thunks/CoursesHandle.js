import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const  CoursesHandle = createAsyncThunk(
    "/courses",
    async () => {
      try {
        const response = await axios.get(
          "https://coursifybynitin-production.up.railway.app/courses",
        );
      
        return  response.data;
      } catch (error) {
        return  null;
      }
    }
  );
  export default CoursesHandle
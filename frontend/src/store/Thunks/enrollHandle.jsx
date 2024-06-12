import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const  enrollHandle = createAsyncThunk(
    "/enroll",
    async (email) => {
      console.log(email)
      try {
       const response = await axios.get(`https://coursifybynitin-production.up.railway.app/courses/enroll/${email}`)
      
       return response.data.courses
       
      } catch (error) {
        console.log(error)
        return null;
      }
    }
  );
  export default enrollHandle
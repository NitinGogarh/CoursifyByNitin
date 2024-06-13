import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const RegisterHandle = createAsyncThunk(
    "/register",
    async (userCredential) => {
      try {
        const response = await axios.post(
          "https://coursifybynitin-production-5b9e.up.railway.app/register",
          userCredential
        );
        return { data: response.data, msg: response.data.msg };
      } catch (error) {
        return { data: null, msg: error.response.data.msg };
      }
    }
  );
  export default RegisterHandle
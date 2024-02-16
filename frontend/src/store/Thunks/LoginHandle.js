import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const  LoginHandle = createAsyncThunk(
    "/register",
    async (userCredential) => {
      try {
        const response = await axios.post(
          "http://localhost:8000/login",
          userCredential
        );
        localStorage.setItem('user',JSON.stringify(response.data.data));
        return { data: response.data.data, msg: response.data.msg };
      } catch (error) {
        return { data: null, msg: error.response.data.msg };
      }
    }
  );
  export default LoginHandle
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverApi } from "../confing/confing";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  role: "",
  phoneNumber: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const data = await axios.post(`${serverApi}v1/user-auth/request-token`, values);
      toast.success("کد برای شما ارسال شد");
      console.log(data);
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        let obj = err.response.data.data;
        for (const key in obj) {
          const value = obj[key][0];
          toast.error(value);
        }
      } else {
        toast.error("خطایی رخ داده است مجددا تلاش کنید");
      }
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const {data} = await axios.post(
        `${serverApi}v1/user-auth/user-login`,
        values
      );
      localStorage.setItem("token", data.data.api_token.api_token);
      return data.data.api_token;
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        let message = err.response.data.message;
        if (message) {
         toast.error(message)
         toast.error("نام کاربری یا رمز عبور اشتباه است");
        } else {
          toast.error("نام کاربری یا رمز عبور اشتباه است");
        }
      } else {
        toast.error("خطایی رخ داده است مجددا تلاش کنید");
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const checkToken = createAsyncThunk(
  "auth/checkToken",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${serverApi}v1/user-auth/check-token`,
        {
          token: values,
        }
      );
      console.log("token recived");
      // console.log(data.data.api_token);
      localStorage.setItem("token", data.data.api_token);
      toast.success("ثبت نام با موفقیت انجام شد");
      return data.data.api_token;
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        let obj = err.response.data.data;
        for (const key in obj) {
          const value = obj[key][0];
          toast.error(value);
        }
      } else {
        toast.error("خطایی رخ داده است مجددا تلاش کنید");
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;
      if (token) {
        // const user = jwtDecode(token)
        return {
          ...state,
          token,
          name: state.name,
          email: state.emil,
          userLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        role: "",
        phoneNumber: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
      // TODO : redirect to login page
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      return { ...state, registerStatus: "success" };
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });

    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          token: action.payload.api_token,
          name: action.payload.user.name,
          registerStatus: "success",
          role:action.payload.user.role
        };
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        loginError: "action.payload",
      };
    });

    builder.addCase(checkToken.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(checkToken.fulfilled, (state, action) => {
      if (action.payload) {
        // const user = jwtDecode(action.payload)
        let user = "zahra";
        // console.log("amini" , user)
        return {
          ...state,
          token: action.payload,
          name: user,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(checkToken.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: "action.payload",
      };
    });
  },
});
export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

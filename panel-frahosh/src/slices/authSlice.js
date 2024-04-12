import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { serverApi } from "../confing/confing";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const initialState = {
  token: localStorage.getItem("token"),
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

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      let sendData = {
        mobile: values.phoneNumber,
        password: values.password,
        password_confirmation: values.confirmPassword,
        role: values.role,
        // name: values.name,
        // family: values.lastName,
        // national_code: values.nationalCode,
      };
      console.log(sendData);
      const data = await axios.post(
        `${serverApi}v1/user-auth/request-token`,
        {...sendData}
      );
      console.log(data);
      // window.location.pathname = "/validation-code"
      // localStorage.setItem("token", token.data)
      // return token.data
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      // console.log(values);
      const { data } = await axios.post(`${serverApi}v1/user-auth/user-login`, {
        mobile: values.mobile,
        password: values.password,
        //    api_token: values.token,
      });
      console.log("token recived");
      // console.log(data);
      return data.data.api_token;
    } catch (err) {
      console.log(err);
      toast.error("نام کاربری یا رمز عبور اشتباه است");
      return rejectWithValue(err.response.data);
    }
  }
);
export const checkToken = createAsyncThunk(
  "auth/checkToken",
  async (values, { rejectWithValue }) => {
    try {
      console.log(values);
      const { data } = await axios.post(
        `${serverApi}v1/user-auth/check-token`,
        {
          token: values,
        }
      );
      console.log("token recived");
      console.log(data);
      console.log(data.data.api_token);

      localStorage.setItem("token", data.data.api_token);
      return data.data.api_token;
    } catch (err) {
      console.log(err);
      toast.error("کد وارد شده اشتباه است");
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
          name: "zahra",
          email: "ss",
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
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.length > 2) {
        // const user = jwtDecode(action.payload)
        let user = "zahra";
        return {
          ...state,
          token: action.payload,
          name: user,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
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

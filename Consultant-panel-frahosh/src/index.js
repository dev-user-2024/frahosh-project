import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assests/css/font.css"
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authReducer, { loadUser } from "./slices/authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
store.dispatch(loadUser(null));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


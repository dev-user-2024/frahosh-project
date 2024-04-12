import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assests/css/font.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer, { loadUser } from './slices/authSlice';

const store = configureStore({
reducer:{
  auth:authReducer
}
})


store.dispatch(loadUser(null))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </>
);

import React from 'react'
import Routes from './routes'
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from './Components/local/ThemeProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const queryClient = new QueryClient

  return (
    <div>
      <ToastContainer position="top-left" autoClose={2000} rtl hideProgressBar/>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
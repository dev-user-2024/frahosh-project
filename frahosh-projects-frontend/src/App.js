import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <div className="App">
        <ThemeProvider>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </ThemeProvider>
    </div>
  );
}

export default App;

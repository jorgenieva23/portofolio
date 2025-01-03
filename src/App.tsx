import React from "react";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;

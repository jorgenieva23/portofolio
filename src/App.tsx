import React from "react";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

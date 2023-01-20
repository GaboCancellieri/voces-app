import React from "react";
import { HomeScreen } from "./screens";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
};

export default App;

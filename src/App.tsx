import React from "react";
import { ActivitieScreen, HomeScreen, Proyects } from "./screens";
import "./App.scss";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/activities" element={<ActivitieScreen />} />
      </Routes>
    </div>
  );
};

export default App;

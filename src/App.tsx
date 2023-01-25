import React from "react";
import {
  ActivitieScreen,
  AdminHomeScreen,
  HomeScreen,
  Proyects,
} from "./screens";
import "./App.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AdminWrapper } from "ccomponents/index";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/activities" element={<ActivitieScreen />} />
        <Route
          path="/admin"
          element={
            <AdminWrapper>
              <AdminHomeScreen />
            </AdminWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

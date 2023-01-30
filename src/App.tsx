import React from "react";
import {
  ActivitieScreen,
  AdminDashboardScreen,
  AdminHomeScreen,
  AdminStreamingScreen,
  HomeScreen,
  Proyects,
  StreamingScreen,
} from "./screens";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { AdminWrapper } from "ccomponents/index";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/activities" element={<ActivitieScreen />} />
        <Route path="/streaming" element={<StreamingScreen />} />
        <Route
          path="/admin"
          element={
            <AdminWrapper>
              <AdminDashboardScreen />
            </AdminWrapper>
          }
        />
        <Route
          path="/admin/home"
          element={
            <AdminWrapper>
              <AdminHomeScreen />
            </AdminWrapper>
          }
        />
        <Route
          path="/admin/streaming"
          element={
            <AdminWrapper>
              <AdminStreamingScreen />
            </AdminWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

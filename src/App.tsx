import React from "react";
import {
  AdminProyect,
  ActivitieScreen,
  AdminDashboardScreen,
  AdminHomeScreen,
  AdminStreamingScreen,
  HomeScreen,
  ProyectScreen,
  StreamingScreen,
  ContactScreen,
  AdminActivitiesScreen,
  GalleryScreen,
  PlatformScreen,
} from "./screens";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { AdminWrapper } from "ccomponents/index";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/proyects" element={<ProyectScreen />} />
        <Route path="/activities" element={<ActivitieScreen />} />
        <Route path="/streaming" element={<StreamingScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path="/platform" element={<PlatformScreen />} />

        <Route
          path="/admin"
          element={
            <AdminWrapper>
              <AdminDashboardScreen />
            </AdminWrapper>
          }
        />
        <Route
          path="/admin/activities"
          element={
            <AdminWrapper>
              <AdminActivitiesScreen />
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
          path="/admin/proyects"
          element={
            <AdminWrapper>
              <AdminProyect />
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

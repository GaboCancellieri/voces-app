import React from "react";
import { HomeScreen } from "./screens";
import "./App.scss";
import NavBar from "./components/common/NavBar";
import Card from "ccomponents/Card/Card";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <HomeScreen />
    </div>
  );
};

export default App;

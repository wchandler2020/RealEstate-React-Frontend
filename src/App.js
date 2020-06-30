import React, { Component } from "react";
import Realestate from "./components/realestate/Realestate";
import "./styles/App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Realestate />
      </div>
    );
  }
}

export default App;

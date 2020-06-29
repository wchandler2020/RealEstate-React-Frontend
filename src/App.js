import React, { Component } from "react";
import Realestate from "./components/realestate/Realestate";
import "./styles/App.css";
import data from "./ListingData";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listingData: data,
    };
  }

  render() {
    return (
      <div className="App">
        <Realestate listingData={this.state.listingData} />
      </div>
    );
  }
}

export default App;

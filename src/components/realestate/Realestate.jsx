import React, { Component } from "react";
import Header from "../layout/Header";
import Filter from "./Filter";
import Listings from "./Listings";
import Hero from "../layout/Hero";

class Realestate extends Component {
  constructor(prop) {
    super(prop);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {}
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <section id="content-area" className="row">
          <Filter handleChange={this.handleChange} />
          <Listings listingData={this.props.listingData} />
        </section>
      </div>
    );
  }
}

export default Realestate;

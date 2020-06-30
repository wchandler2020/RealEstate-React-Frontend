import React, { Component } from "react";
import Header from "../layout/Header";
import Filter from "./Filter";
import Listings from "./Listings";
import Hero from "../layout/Hero";
import listingData from "../../ListingData";

class Realestate extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      listingData,
      state: "",
      homeType: "",
      bedrooms: 0,
      bathrooms: 0,
      minPrice: 0,
      maxPrice: 0,
      minSpace: 0,
      maxSpace: 0,
      basement: false,
      garage: false,
      pool: false,
      filteredData: listingData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filteredData = this.filteredData.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
        this.filteredData();
      }
    );
  }

  filteredData() {
    let newData = this.state.listingData.filter((item) => {
      return (
        (item.price >= this.state.minPrice &&
          item.price <= this.state.maxPrice) ||
        (item.floorSpace >= this.state.minSpace &&
          item.floorSpace <= this.state.maxSpace)
      );
    });

    this.setState({
      filteredData: newData,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <section id="content-area" className="row">
          <Filter handleChange={this.handleChange} globalState={this.state} />
          <Listings listingData={this.state.filteredData} />
        </section>
      </div>
    );
  }
}

export default Realestate;

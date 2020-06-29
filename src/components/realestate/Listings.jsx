import React, { Component } from "react";
import {
  FaBed,
  FaRulerCombined,
  FaList,
  FaGripVertical,
  FaCalculator,
  FaLocationArrow,
  FaDollarSign,
  FaBath,
  FaHome,
} from "react-icons/fa";

class Listings extends Component {
  render() {
    console.log(this.props.listingData);
    return (
      <section id="home-section">
        <section id="listings">
          <section className="search-area">
            <input type="text" name="search" placeholder="Search..." />
          </section>
          <section className="sortby-area">
            <div className="sort-options">
              <select name="sortby" className="sortby" id="">
                <option value="price-asc">Price High to Low</option>
                <option value="price-dsc">Price Low to High</option>
              </select>
              <div className="view">
                <FaList /> <FaGripVertical />
              </div>
            </div>
            <div className="results">390 results found</div>
          </section>
        </section>

        <div className="current-header">
          <h1 className="display-4 listing-text">Current Listings</h1>
        </div>
        <section id="listing-results">
          {this.props.listingData.map((listing) => {
            return (
              <div className="listing" key={listing.id}>
                <div
                  className="listing-img"
                  style={{
                    background: `url("${listing.thumbnail}")`,
                  }}
                >
                  <span className="address">{listing.address}</span>
                  <div className="details">
                    <div
                      className="user-img"
                      style={{
                        background: `url("${listing.agentImg}")`,
                      }}
                    ></div>

                    <div className="user-details">
                      <span className="user-name">{listing.agent}</span>
                      <span className="posted-date">
                        On Market {listing.since}
                      </span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <FaRulerCombined />
                        <span className="ml-1">
                          {listing.floorspace}ft&sup2;
                        </span>
                      </div>
                      <div className="bedrooms">
                        <FaBed />
                        <span className="ml-1">{listing.rooms} Bedrooms</span>
                      </div>
                      <div className="bedrooms">
                        <FaBath />
                        <span className="ml-1">{listing.bath} Bathrooms</span>
                      </div>
                      <div className="payment">
                        <span className="payment-text">
                          <FaCalculator />
                          <strong className="ml-1">Est. payment:</strong> $
                          {listing.monthlyPayment}/mo
                        </span>
                      </div>
                      <button className="btn btn-success mt-2 detail-btn ">
                        Listing Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bottom-info">
                  <span className="price">
                    <FaDollarSign />
                    {listing.price}
                  </span>
                  <span className="home-type">
                    <FaHome /> {listing.homeType}
                  </span>
                  <span className="location mt-1">
                    <FaLocationArrow /> {listing.city}, {listing.state}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li class="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Listings;

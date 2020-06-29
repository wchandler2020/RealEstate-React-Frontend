import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4 className="pt-3">Filter</h4>
          <span className="title">State:</span>
          <select name="states" class="form-control">
            <option value="CHOOSE YOUR STATE">Choose Your State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <span className="title">Home Type:</span>
          <select name="home_type" id="" class="form-control">
            <option value="ANY">Any</option>
            <option value="SINGLE">Single Family</option>
            <option value="CONDO">Condo/Co-op</option>
            <option value="MULTI">Multi-Family</option>
            <option value="TOWNHOME">Townhome</option>
          </select>
          <span className="title">Bedrooms:</span>
          <select name="bedrooms" id="" class="form-control">
            <option value="ANY">Any</option>
            <option value="2 Bedroom">2 Bedrooms</option>
            <option value="3 Bedroom">3 Bedroomsp</option>
            <option value="4 Bedrooms">4 Bedrooms</option>
            <option value="Plus Four">+4 Bedrooms</option>
          </select>
          <span className="title">Bathrooms:</span>
          <select name="bedrooms" id="" class="form-control">
            <option value="ANY">Any</option>
            <option value="2 Bathroom">2 Bathrooms</option>
            <option value="3 Bathroom">3 Bathroomsp</option>
            <option value="4 Bathrooms">4 Bathrooms</option>
          </select>

          <div className="filters price form-group">
            <span className="title">Price:</span>
            <input
              type="text"
              name="min-price"
              class="form-control min-price"
              placeholder="min"
            />
            <input
              type="text"
              name="max-price"
              class="form-control max-price"
              placeholder="max"
            />
          </div>
          <div className="filters floor-space form-group">
            <span className="title">Floor Space:</span>
            <input
              type="text"
              name="min-space"
              class="form-control min-space"
              placeholder="min"
            />
            <input
              type="text"
              name="max-space"
              class="form-control max-space"
              placeholder="max"
            />
          </div>
          <div className="amenities filters">
            <span className="title">Amenities:</span>
            <label class="form-check-label" htmlFor="pool">
              <span class="label">In Ground Pool</span>
              <input
                class="form-check-input"
                type="checkbox"
                value="pool"
                id="pool"
              />
            </label>
            <label class="form-check-label" htmlFor="garage">
              <span className="label">Garage</span>
              <input
                class="form-check-input"
                type="checkbox"
                value="garage"
                id="garage"
              />
            </label>
            <label class="form-check-label" htmlFor="basement">
              <span className="label">Finished Basement</span>
              <input
                class="form-check-input"
                type="checkbox"
                value="garage"
                id="garage"
              />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Filter;

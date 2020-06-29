import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <a className="navbar-brand" href="#">
          React Realestate
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Buy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sell
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link highlight" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

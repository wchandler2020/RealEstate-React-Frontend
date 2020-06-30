import React, { Component } from "react";

const titles = [
  "a made for new beginnings",
  "the starting place of love",
  "not a place but a feeling",
  "made of hopes and dreams",
];

class Hero extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(
      () =>
        this.setState({
          fadeIn: false,
        }),
      3000
    );

    this.animateTitle();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  animateTitle = () => {
    setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % titles.length;

      this.setState({ titleIndex, fadeIn: true });
      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 3000);
    }, 4000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = titles[titleIndex];
    return (
      <div
        className="position-relative overflow-hidden p-3 text-center  "
        id="hero-section"
      >
        <div className="col-md-5 p-lg-5 mx-auto my-5 hero-text">
          <h1 className="display-4 font-weight-normal">React Realty</h1>
          <p className="lead font-weight-normal">
            home is…
            <span className={fadeIn ? "title-fade-in" : "title-fade-out"}>
              {title}.
            </span>
          </p>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
      </div>
    );
  }
}

export default Hero;

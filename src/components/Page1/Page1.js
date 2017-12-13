import React, { Component } from "react";
import Box from "../gsap/Box";
import './Page1.scss';

export default class Page1 extends Component {
  render() {
    return (
      <div className="c_page1">
        <p className="title">page1</p>
        <Box />
      </div>
    );
  }
}

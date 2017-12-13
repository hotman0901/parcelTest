import React, { Component } from "react";
import './Box.scss';
export default class Class extends Component {
  render() {
    return (
      <div
        id="box"
        className="c_box"
        ref={c => (this.box = c)}
      />
    );
  }
}

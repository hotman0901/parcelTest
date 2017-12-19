import React, { Component } from "react";
import './Box.scss';
import {TweenMax, TweenLite} from 'gsap';
export default class Class extends Component {

  componentDidMount()
  {
    // TweenMax.to(this.box, 2, { x: '+=200px', backgroundColor: '#2196f3' });

    // TweenLite.to(this.box, 1, {x: '+=200px'});
    TweenLite.to(this.box, 1, {opacity:0, delay:.5});
  }

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

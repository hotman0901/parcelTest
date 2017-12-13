import React, { Component } from "react";
import Box from "../gsap/Box";
import './Page2.scss';
import {TweenMax} from 'gsap';
export default class Page12 extends Component {

  componentDidMount()
  {
    TweenMax.to(this.title, 2, { x: '+=200px', backgroundColor: '#2196f3' });
  }

  render() {
    return (
      <div className="c_page2">
        <p className="title" ref={c => this.title = c}>我是page2</p>
      </div>
    );
  }
}

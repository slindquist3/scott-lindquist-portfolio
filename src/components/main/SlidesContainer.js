import React from 'react';

import MenuIcon from '../common-components/MenuIcon.js';
import ArrowButtons from '../common-components/ArrowButtons.js';

import Slide1 from '../slides/Slide1.js';
import Slide2 from '../slides/Slide2.js';
import Slide3 from '../slides/Slide3.js';

export default class SlidesContainer extends React.Component {

  constructor(props) {
    super(props);

    if (window.location.hash === "/" ||
        window.location.hash === "/#" ||
        window.location.hash === "#/" ||
        window.location.hash === "/scott-lindquist-portfolio/" ||
        window.location.hash === "/scott-lindquist-portfolio/#") {

        this.state = {
          slide: 1
        }

    } else {
      var path = window.location.hash;

      if (path[path.length-1] === "/") {
        path = path.slice(0, -1);
      }
      this.state = { slide: parseInt(path.slice(path.length - 1))}
    }

    this.handleCLickNext = this.handleClickNext.bind(this);
    this.handleCLickBack = this.handleClickBack.bind(this);
  }

  handleClickNext = () => {
    this.setState({slide: this.state.slide + 1}, function() {
      document.querySelector('.currentSlide').children[0].classList.add('out');
    });
  }

  handleClickBack = () => {
    if (this.state.slide - 1 < 1) {
      return;
    } else {
      this.setState({slide: this.state.slide - 1}, function() {
        document.querySelector('.currentSlide').children[0].classList.add('in');
      });
    }
  }

  render() {

    var slidesToRender = {
      1: <Slide1 />,
      2: <Slide2 />,
      3: <Slide3 />
    }

    return (
      <div className="SlidesContainer">
        <MenuIcon />
        <ArrowButtons
          slide={this.state.slide}
          handleClickBack={this.handleClickBack}
          handleClickNext={this.handleClickNext}
        />
        <div className="currentSlide">
          {slidesToRender[this.state.slide]}
        </div>
      </div>
    )
  }
}

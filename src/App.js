import React, { Component } from 'react';
import { Fade } from "react-awesome-reveal";

import './App.css';

import Intro from './content/intro.js';
import AboutMe from './content/aboutme.js';
import Work from './content/work.js';

import Logo from './assets/Logo.png';

import Laptop from './assets/Laptop.png';
import Briefcase from './assets/Briefcase.png';
import Coffee from './assets/Coffee.png';
import Water_Bottle from './assets/Water_Bottle.png';
import Notebook from './assets/Notebook.png';
import iPhone from './assets/iPhone.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercentage: 0,
      sections: [
        { name: 'Úvod', ref: React.createRef() },
        { name: 'O mně', ref: React.createRef() },
        { name: 'Moje práce', ref: React.createRef() }
      ]
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.moveImages();
  }

  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    this.setState({ scrollPercentage: scrolled.toFixed(2) });
    console.log(this.state.scrollPercentage);
  }

  moveImages = () => {
    const moveImage = (imageSelector) => {
      const image = document.querySelector(imageSelector);
      if (image.complete) {
        initMoveImage(image);
      } else {
        image.onload = () => initMoveImage(image);
      }
    };

    const initMoveImage = (image) => {
      const maxX = window.innerWidth - image.clientWidth;
      const maxY = window.innerHeight - image.clientHeight;

      // Ensure initial position is set
      image.style.left = `${image.offsetLeft}px`;
      image.style.top = `${image.offsetTop}px`;

      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      const newDuration = Math.random() * 3 + 2; // Duration between 2 to 5 seconds

      image.style.left = `${newX}px`;
      image.style.top = `${newY}px`;
      image.style.transition = `all ${newDuration}s ease-in-out`;
    };

    setInterval(() => {
      moveImage('.Laptop');
      moveImage('.Briefcase');
      moveImage('.Coffee');
      moveImage('.Water_Bottle');
      moveImage('.Notebook');
      moveImage('.iPhone');
    }, 5000); // Change positions every 5 seconds
  }

  renderNavigationDots = () => {
    const { sections, scrollPercentage } = this.state;
    return sections.map((section, index) => {
      const isActive = scrollPercentage >= (100 / sections.length) * index &&  scrollPercentage < (100 / sections.length) * (index + 1);
      section.isActive = isActive;

      return (
        <div className={`dot ${isActive ? 'active' : ''}`} />
      );
    });
  }

  contentSwitcher = () => {
    const { scrollPercentage } = this.state;

    console.log('Scroll Percentage:', scrollPercentage);

    if (scrollPercentage >= 0 && scrollPercentage < 35.65) {
      return (
        <div className='intro'>
          <Fade>
            <Intro />
          </Fade>
        </div>
      );
    } else if (scrollPercentage >= 35.65 && scrollPercentage < 68.58) {
      return (
        <div className='aboutme'>
          <Fade>
            <AboutMe />
          </Fade>
        </div>
      );
    } else if (scrollPercentage >= 68.58) {
      return (
        <div className='work'>
          <Fade>
            <Work />
            <AboutMe />
          </Fade>
        </div>
      );
    }

    return null; // Return null if no content should be displayed
  }

  navigationLinks = () => {
    const { sections } = this.state;

    return (
      <ul className='navigationLinks'>
      {sections.map((section, index) => {
        return(
          <li>
            <a href="#" className={section.isActive ? 'activeLink' : ''}>{section.name}</a>
          </li>
        );
      })}
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <img className='Laptop floatingIcons' src={Laptop} />
        <img className='Briefcase floatingIcons' src={Briefcase} />
        <img className='Coffee floatingIcons' src={Coffee} />
        <img className='Water_Bottle floatingIcons' src={Water_Bottle} />
        <img className='iPhone floatingIcons' src={iPhone} />
        <img className='Notebook floatingIcons' src={Notebook} />
        <img src={Logo} className='Logo' />
        <div className="left-fixed">
          {this.renderNavigationDots()}
        </div>
        <div className="right">
          <div className='container-fluid full-height'>
            <div className='row'>
              <div className='col navigationLinks'>
                {this.navigationLinks()}
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12'>
                <Intro />
                <AboutMe />
                <Work />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
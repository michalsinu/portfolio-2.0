import React, { Component } from 'react';
import $ from 'jquery';
import moveImages from './moveImages.js';

import { Fade } from "react-awesome-reveal";

import './App.css';
import './responsive.css';

import Intro from './content/intro.js';
import AboutMe from './content/aboutme.js';
import Work from './content/work.js';
import Services from './content/services.js';
import Finance from './content/finance.js';
import Contact from './content/contact.js';
import Footer from './content/footer.js';
import MobileMenu from './content/mobileMenu.js';

import Logo from './assets/Logo.png';

import Laptop from './assets/Laptop.png';
import Briefcase from './assets/Briefcase.png';
import Coffee from './assets/Coffee.png';
import Water_Bottle from './assets/Water_Bottle.png';
import Notebook from './assets/Notebook.png';
import iPhone from './assets/iPhone.png';
import mobileMenu from './content/mobileMenu.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        { name: 'Úvod', href: '' },
        { name: 'O mně', href: 'omne' },
        { name: 'Moje práce', href: 'portfolio' },
        { name: 'Moje služby', href: 'sluzby' },
        { name: 'Cena', href: 'cena' },
        { name: 'Kontakt', href: 'kontakt' },
      ]
    };
  }

  componentDidMount() {
    const moveImagesInstance = new moveImages();
    moveImagesInstance.init();
  }

  navigationLinks = () => {
    const { sections } = this.state;

    return (
      <ul>
      {sections.map((section, index) => {
        return(
          <li>
            <a href={"/#" + section.href}>{section.name}</a>
          </li>
        );
      })}
      </ul>
    )
  }

  MobileMenuToggle = () => {
    $('.mobile-menu').toggleClass('mobile-menu-active');
    $('.line').toggleClass('line-active');
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="App">
        <MobileMenu sections={sections} />
        <img id='Laptop' className='floatingIcons' src={Laptop} />
        <img id='Briefcase' className='floatingIcons' src={Briefcase} />
        <img id='Coffee' className='floatingIcons' src={Coffee} />
        <img id='Water_Bottle' className='floatingIcons' src={Water_Bottle} />
        <img id='iPhone' className='floatingIcons' src={iPhone} />
        <img id='Notebook' className='floatingIcons' src={Notebook} />

        <div className='container-fluid header px-0'>
          <div className='row'>
            <div className='col-6'>
              <img src={Logo} className='Logo' />
            </div>

            <div className='col-6 pt-5'>
              <span className='navigationLinks'>
                {this.navigationLinks()}
              </span>
              <div class="hamburger-menu" onClick={this.MobileMenuToggle}>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>

        <Intro />
        <AboutMe />
        <Work />
        <Services />
        <Finance />
        <Contact />
        <Footer/>
      </div>
    );
  }
}

export default App;
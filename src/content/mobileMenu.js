import React, { Component } from 'react';
import $ from 'jquery';

class mobileMenu extends Component {
  close() {
    $('.mobile-menu').toggleClass('mobile-menu-active');
    $('.line').toggleClass('line-active');
  }

  navigationLinks = () => {
    return (
      <ul>
      {this.props.sections.map((section, index) => {
        return(
          <li>
            <a href={"#" + section.href} onClick={this.close}>{section.name}</a>
          </li>
        );
      })}
      </ul>
    )
  }

  render() {
    return (
      <div className="mobile-menu">
        {this.navigationLinks()}
      </div>
    );
  }
}

export default mobileMenu;
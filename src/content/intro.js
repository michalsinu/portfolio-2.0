import React, { Component } from 'react';
import $ from 'jquery';
import Face from '../assets/Face.png';
import GitHub from '../assets/github.png';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.counter !== 0) {
        this.setState({ counter: this.state.counter - 1 });
      } else {
        $('#name').text('Michal Sinu')
      }
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
    <div className='contentDown intro'>
      <h1 id="name">Michal Sinu <i><span className='introCounter'>{this.state.counter}</span></i></h1>
      <i>Full Stack Vývojář Webových Aplikací</i><br />
      <b>+420775020590 <a href="mailto:kontakt@michalsinu.cz">kontakt@michalsinu.cz</a></b><br /><br />
      <a href="https://github.com/michalsinu" target='_blank'><img src={GitHub} className='github' /></a>

    </div>
    <img src={Face} className='Face' />
    </React.Fragment>
    );

  }
}

export default Intro;
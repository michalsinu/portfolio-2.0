import React, { Component } from 'react';
import $ from 'jquery';
import Face from '../assets/Face.png';
import GitHub from '../assets/github.png';

class Intro extends Component {
  render() {
    return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid intro'>
        <div className='container introContent mt-5'>
          <div className='row'>
            <div className='col-12'>
              <h1 id="name">Michal Sinu</h1>
              <i>Full Stack Vývojář Webových Aplikací</i><br />
              <b>+420775020590 <a href="mailto:kontakt@michalsinu.cz">kontakt@michalsinu.cz</a></b> <a href="https://github.com/michalsinu" target='_blank'>
                <img src={GitHub} className='github' />
              </a>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-6 col-lg-5 mx-auto pt-3'>
              <span className='badge skill'>HTML</span>
              <span className='badge skill'>CSS</span>
              <span className='badge skill'>JavaScript</span>
              <span className='badge skill'>PHP</span>
              <span className='badge skill'>Twig</span>
              <span className='badge skill'>MySQL</span>
              <span className='badge skill'>ReactJs</span>
              <span className='badge skill'>PostgresSQL</span>
              <span className='badge skill'>jQuery</span>
              <span className='badge skill'>GIT</span>
              <span className='badge skill'>Linux</span>
              <span className='badge skill'>Bash</span>
              <span className='badge skill'>Windows</span>
            </div>
          </div>
        </div>
        <img src={Face} className='Face' />
      </div>


    </React.Fragment>
    );

  }
}

export default Intro;
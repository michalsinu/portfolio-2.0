import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='container-fluid'>
        <div className='row p-5'>
          <div className='col-sm-6 mt-5'>
            <h4><b>Kontakt</b></h4>
            +420775020590<br />
            <a href="mailto:kontakt@michalsinu.cz">kontakt@michalsinu.cz</a>
          </div>
          <div className='col-sm-6 mt-5'>
            <p>
              <h4><b>Fakturační údaje</b></h4>
              Michal Sinu<br />
              Krušnohorská 1669<br />
              431 11 Jirkov<br /><br />
              {/*IČO: 000 00 000<br /><br />*/}
              <i>Podnikatel je zapsán v živnostenském rejstříku vedeném na Magistrátu města Chomutova. Nejsem plátce DPH.</i>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 copyright'>
            © Michal Sinu { new Date().getFullYear()}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
import React, { Component } from 'react';
import Marquee from "react-fast-marquee";
import stockImage from '../assets/designer.jpeg';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroller: {
        speed: 5
      }
    }
  }

  render() {
    return (
      <div id="omne" className='container-fluid aboutMeContainer' data-aos="flip-left">
        <div className="marquee-container">
          <Marquee className='scroller' speed='200' direction='right'>
            MICHAL SINU MICHAL SINU MICHAL SINU MICHAL SINU MICHAL SINU MICHAL SINU MICHAL SINU MICHAL SINU MICHAL SINU MICHAL SINU MICHAL SINU
          </Marquee>
        </div>


          <div className="row">
            <div className='col-sm-5'>
              <img src={stockImage} className='stockImage' alt="Stock" />
            </div>
            <div className='col-sm-7 aboutMeContent'>
            <div className='aboutMeTypography'>
              <h1>Něco</h1>
              <h1>Malého</h1>
              <h1>O MNĚ. 🤙🏽</h1>
            </div>
            <p>
              Jsem Michal Sinu, vývojář webových rozhraní, který se neustále snaží překonávat očekávání. Mým cílem je vytvářet nejen krásné a esteticky příjemné webové stránky, ale také ty, které poskytují uživatelům maximální komfort a snadnou použitelnost. S mým pečlivým okem pro detail se věnuji každému aspektu designu a vývoje, abych zajistil, že každý prvek na stránce má své místo a přispívá k celkovému uživatelskému zážitku.<br />
              <br />
              Mám silný základ v moderních technologiích, jako jsou HTML, CSS a JavaScript, a neustále sleduji trendy a novinky ve světě front-end vývoje. Díky tomu jsem schopen aplikovat nejnovější postupy a techniky, abych zajistil, že mé práce je vždy aktuální a konkurenceschopná.<br />
              <br />
              Mým posláním je nejen vytvářet skvělé webové stránky, ale také inspirativně přispívat k rozvoji oboru. Proto se aktivně zapojuji do komunity vývojářů, sdílím své znalosti a zkušenosti a spolupracuji na projektech, které přinášejí inovace a posouvají hranice možností webových technologií.<br />
              <br />
              Ve své práci se snažím najít rovnováhu mezi kreativitou a funkcionalitou, abych dosáhl optimálního výsledku pro každý projekt, na kterém pracuji. Jsem přesvědčen, že kombinace vášně, znalostí a pečlivé práce je klíčem k úspěchu ve front-end vývoji, a jsem hrdý, že mohu být součástí této dynamické a inovativní komunity.
            </p>
           </div>
          </div>
        <div className="marquee-container">
          <Marquee className='scroller scrollerInverted' speed='200'>
            O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ O MNĚ
          </Marquee>
        </div>
      </div>
    );
  }
}

export default AboutMe;

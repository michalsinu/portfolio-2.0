import React, { Component } from 'react';
import financeImg from '../assets/finance.png';

class Finance extends Component {
  render() {
    return (
      <div className='financeContainer pb-5'>
        <div className='container-fluid'>
          <div className='row text-center pt-5'>
            <div className='col-sm-6 pt-5 financeTextContainer'>
              <h1 className='financeHeading display-2'>jaká je cena mých služeb?</h1>
              <p className='financeSubHeading pt-3'>
              Každý klient je jedinečný, a proto přistupuji k cenění mých služeb individuálně. Pevná cena se tak nedá předem určit.
              </p>
              <p className='financeText pt-3 pb-4'>
              Přestože se cena mé práce odvíjí od individuálních potřeb každého klienta a nemohu nabídnout pevnou tarifu, existuje určité cenové rozpětí, které může sloužit jako orientační bod. Jsem vždy připraven sednout si a probrat, co přesně potřebujete, abychom společně našli nejlepší řešení odpovídající vašim požadavkům i rozpočtu. Cena se poté odvíjí od rozsahu a komplexnosti požadovaných služeb.
              </p>
              <a href='#' className='pt-5'>Kontaktujte mně</a>
            </div>
            <div className='col-sm-6'>
              <img src={financeImg} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finance;
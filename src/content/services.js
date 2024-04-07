import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div id='servicesContainer'>
        <div className='container-fluid servicesContainer mt-5 p-5 shadow' style={{border: '1px solid #F0F0F0', backgroundColor: '#fa4d41'}}>
          <div className='row text-center mt-5'>
            <div className='col-sm-6 text-white p-5'>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='service'>
                    <div className='serviceHeading display-4'>Programování 💻</div><br />
                    <div className='serviceText'>
                      Nabízím individuální programové řešení přizpůsobené vašim konkrétním potřebám. Ať už potřebujete vývoj webových stránek, vytvoření aplikace nebo úpravy softwaru, dokážu vaše nápady převést do reality prostřednictvím programátorských dovedností.
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='service'>
                    <div className='serviceHeading display-4'>Webový design 🎨</div><br />
                    <div className='serviceText'>
                    Specializuji se na vytváření vlastních webových designů, které vynikají. Nechte mě přeměnit vaši vizi do vizuálně působivé a uživatelsky přívětivé webové stránky. Zvýšte svoji online přítomnost designem, který je jedinečně přizpůsoben vaší značce a cílům.
                    </div>
                  </div>
                </div>
              </div>
              <div className='row pt-5'>
                <div className='col-sm-6'>
                  <div className='service'>
                    <div className='serviceHeading display-4'>Responzivní design 📱</div><br />
                    <div className='serviceText'>
                      Při návrhu webových stránek klade zvláštní důraz na responzivitu a přátelskost k mobilním zařízením. Vaše webové stránky se budou bezproblémově přizpůsobovat různým velikostem obrazovek a zařízením, což zaručuje optimální uživatelský zážitek pro vaše návštěvníky, ať už jsou na stolním počítači, tabletu nebo chytrém telefonu.
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='service'>
                    <div className='serviceHeading display-4'>Údržba 👨🏻‍🔧</div><br />
                    <div className='serviceText'>
                      Při vytváření webových stránek je klíčové nejen postavit funkční a vizuálně přitažlivý web, ale také zajistit jeho průběžný rozvoj a optimalizaci. Proto součástí mé nabídky je i údržba webových stránek, která zahrnuje přidávání nových funkcí a opravu případných chyb, aby vaše stránka byla neustále v kroku s dobou a potřebami vašeho podnikání. Tato údržba zajišťuje, že web bude nadále sloužit vašim cílům a podporovat váš růst.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='servicesTypography'>
                <h1>
                  Moje
                </h1>
                <h1>
                  Služby
                </h1>
                <h1>
                  Jenom
                </h1>
                <h1>
                  Pro
                </h1>
                <h1>
                  Vás.
                </h1>
                <br />
                <a href='#'>
                  <h3>Začít objednávku <img className='img-fluid arrow-right' src='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5LjA4IDE2aC0yNk0yOS4wOCAxNmwtNCA1TTI5LjA4IDE2bC00LTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjJweCIgY2xhc3M9InN0cm9rZS0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=' /></h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
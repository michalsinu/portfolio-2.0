import React, { useEffect } from 'react';
import workJS from '../assets/workjs.png';
import cartel from '../assets/cartel.png';

function Work() {
  useEffect(() => {
    function getDocHeight() {
      var D = document;
      return Math.max(
        D.body.scrollHeight,
        D.documentElement.scrollHeight,
        D.body.offsetHeight,
        D.documentElement.offsetHeight,
        D.body.clientHeight,
        D.documentElement.clientHeight
      );
    }

    function scrollingWeb() {
      var workJSPage = document.getElementById('workJSPage');
      var cartelPage = document.getElementById('cartelPage');

      if (workJSPage && cartelPage) {
        workJSPage.style.backgroundPosition = '0 ' + 0 + '%';
        cartelPage.style.backgroundPosition = '0 ' + 0 + '%';

        var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
        var docheight = getDocHeight();
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var trackLength = docheight - winheight;
        var pctScrolled = Math.floor(scrollTop / trackLength * 100 * 2.3); // gets percentage scrolled (i.e., 80 or NaN if track length == 0)

        workJSPage.style.backgroundPosition = '0 ' + pctScrolled + '%';
        cartelPage.style.backgroundPosition = '0 ' + pctScrolled + '%';
      }
    }


    document.addEventListener('scroll', scrollingWeb);
  }, []);

  const workJSPage = { backgroundImage: `url(${workJS})`, backgroundPosition: '0 0%'};
  const cartelPage = { backgroundImage: `url(${cartel})` };

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className="col-md-12">
          <div id="workTypography">
            <h1>moje</h1>
            <h1>nejnovější</h1>
            <h1>projekty. 🎨</h1>
          </div>
        </div>
      </div>
      <div className="row portfolioIntro">
        <div className="col-md-6">
          <div className="imac temp">
            <div className="screen" id="scrn">
              <div id="cartelPage" style={cartelPage} />
            </div>
            <div className="logo"></div>
            <div className="leg"></div>
            <div className="foot"></div>
            <div className='projectInfo'>
              <a href="https://cartelbarber.cz/" target='_blank'>Cartel Barbershop</a> <i class="fa-solid fa-link"></i><br /><br />
              <p>
                Společnost Cartel Barbershop představuje jedinečný barbershop, který se specializuje na moderní a vkusné účesy od roku 2023. <div className='more'>Více...</div>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="imac temp">
            <div className="screen" id="scrn">
              <div id="workJSPage" style={workJSPage} />
            </div>
            <div className="logo"></div>
            <div className="leg"></div>
            <div className="foot"></div>
            <div className='projectInfo'>
              <a href="https://www.workjs.cz/" target='_blank'>WorkJS s.r.o. <i class="fa-solid fa-link"></i></a><br /><br />
              <p>
                Zprostředkovatel zaměstnání má za úkol usnadnit spojení mezi zaměstnavateli a uchazeči o práci a pomoci nalezení vhodných pracovních příležitostí pro jednotlivce. <div className='more'>Více...</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
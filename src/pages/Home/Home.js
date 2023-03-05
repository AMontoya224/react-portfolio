import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Left2 from '../../components/Left/Left2';


function Home(props) {
  const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;
  const [btnSub, setBtnSub] = useState(false);

  const onBtnSub = () => {
    if (!btnSub) {
      setBtnSub(true);
    }
    else {
      setBtnSub(false);
    }
  };

  setTimeout(() => {
    let wolf = document.getElementById('H-wolf');
    let img = document.getElementById('H-img');
    document.onmousemove = function (e) {
      wolf.style.left = ((e.pageX) / 50) + 340 + 'px';
      wolf.style.top = ((e.pageY) / 50) - 320 + 'px';
      img.style.left = ((e.pageX) / 30) + 790 + 'px';
      img.style.top = ((e.pageY) / 30) + 120 + 'px';
    }
  }, 500);

  const onBtnWorks = () => {
    onSelectLeft('#1');
    props.history.push('/projects');
    testRef1.current.scrollIntoView({ block: "start" });
  };

  const onBtnWorksD = () => {
    onSelectLeft('#1');
    props.history.push('/projects/developer');
    testRef1.current.scrollIntoView({ block: "start" });
  };

  const onBtnWorksE = () => {
    onSelectLeft('#1');
    props.history.push('/projects/electronic');
    testRef1.current.scrollIntoView({ block: "start" });
  };

  const onBtnAboutMe = () => {
    onSelectLeft('#1');
    props.history.push('/aboutme');
    testRef1.current.scrollIntoView({ block: "start" });
  };

  const onBtnContact = () => {
    onSelectLeft('#1');
    props.history.push('/contact');
    testRef1.current.scrollIntoView({ block: "start" });
  };

  const scrollSelect = (select) => {
    onSelectLeft(select);
  };

  return (
    <div className="Home">
      <title>{selectLan ? 'Home | PORTFOLIO' : 'Inicio | PORTAFOLIO'}</title>
      <Left2 selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} />
      <div id='H-wolf'>
        <div>
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img id='H-img' src={require('./../../images/wolf.png')} alt='wolf'/>

      <section className='section-1' ref={testRef1} onMouseEnter={() => scrollSelect('#1')} onTouchStart={() => scrollSelect('#1')}>
        <p className='H-title'>ANDRES</p>
        <p className='H-title'>MONTOYA</p>
        <button className={btnSub ? 'H-sub active' : 'H-sub'} onClick={onBtnSub}>
          <div className={btnSub ? 's1 active' : 's1'}></div>
          {btnSub ? 'PORTFOLIO' : 'CLICK'}
          <div className={btnSub ? 's2 active' : 's2'}></div>
        </button>
        <div id='CH-main'>
          <p className='H-main'>{selectLan ? 'Full stack developer /' : 'Desarrollador full stack /'}</p>
          <p className='H-main'>{selectLan ? 'Electronic engineer /' : 'Ingeniero electrónico /'}</p>
          <p className='H-main'>{selectLan ? 'Investigator' : 'Investigador'}</p>
        </div>
      </section>

      <section className='section-2' ref={testRef2} onMouseEnter={() => scrollSelect('#2')} onTouchStart={() => scrollSelect('#2')}>
        <p className='H-title'>{selectLan ? 'Projects' : 'Proyectos'}</p>
        <button onClick={onBtnWorks} className='H-sub'>
          <div className='s1'></div>
          {selectLan ? 'SHOW ME MORE' : 'MUESTRAME MAS'}
          <div className='s2'></div>
        </button>
        <div>
          <div>
            <p className='H-main'>{selectLan ? 'Passion for creating amazing products' : 'Pasión por crear productos increíbles'}</p>
            <div>
              <img onClick={onBtnWorksD} src={require('./../../images/developer.png')} alt='developer' />
              <img onClick={onBtnWorksE} src={require('./../../images/electronic.png')} alt='electronic' />
            </div>
          </div>
          <p className='number'>02</p>
        </div>
        <footer></footer>
      </section>

      <section className='section-3' ref={testRef3} onMouseEnter={() => scrollSelect('#3')} onTouchStart={() => scrollSelect('#3')}>
        <p className='H-title'>{selectLan ? 'About me' : 'Sobre mí'}</p>
        <button onClick={onBtnAboutMe} className='H-sub'>
          <div className='s1'></div>
          {selectLan ? 'SHOW ME MORE' : 'MUESTRAME MAS'}
          <div className='s2'></div>
        </button>
        <div>
          <div>
            <p className='H-main'>{selectLan ? 'I love design, technology,' : 'Me encanta el diseño, la tecnología'}</p>
            <p className='H-main'>{selectLan ? 'and creativity' : 'y la creatividad'}</p>
            <img onClick={onBtnAboutMe} src={require('./../../images/perfil.jpg')} alt='foto' />
          </div>
          <p className='number'>03</p>
        </div>
        <footer></footer>
      </section>

      <section className='section-4' ref={testRef4} onMouseEnter={() => scrollSelect('#4')} onTouchStart={() => scrollSelect('#4')}>
        <h1 className='H-title'>{selectLan ? 'Get In Touch' : 'Contáctame'}</h1>
        <button onClick={onBtnContact} className='H-sub'>
          <div className='s1'></div>
          {selectLan ? 'SHOW ME MORE' : 'MUESTRAME MAS'}
          <div className='s2'></div>
        </button>
        <div>
          <div>
            <a href="mailto:montyang224@gmail.com?subject=Quiero contactar contigo Andres!">
              montyang224@gmail.com
            </a>
            <a className="whatsapp" href="https://wa.me/51954222771/?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank" rel="noreferrer">
              +51 954 222 771
            </a>
            <div>
              <a className="pagina" href="https://www.linkedin.com/in/amontoya224/" target="_blank" rel="noreferrer">
                <ion-icon name="logo-linkedin" size="large"></ion-icon>
              </a>
              <a className="pagina" href="https://github.com/AMontoya224" target="_blank" rel="noreferrer">
                <ion-icon name="logo-github" size="large"></ion-icon>
              </a>
              <a className="pagina" href="https://scholar.google.com/citations?user=LI023coAAAAJ&hl=es" target="_blank" rel="noreferrer">
                <ion-icon name="logo-chrome" size="large"></ion-icon>
              </a>
              <a className="pagina" href='https://drive.google.com/file/d/1O0kGnQr3pxzlfkDREknbgMkmAbcx95Dx/view?usp=sharing' target="_blank" rel="noreferrer">
                <img src={require('./../../images/cv.jpg')} alt='cv' title='Curriculum Vitae' />
              </a>
              <a className="pagina" href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=140140" target="_blank" rel="noreferrer">
                <img src={require('./../../images/concytec.png')} alt='concytec' title='Concytec' />
              </a>
              <a className="pagina" href="https://web.facebook.com/juan.andres.montoya.angulo" target="_blank" rel="noreferrer">
                <ion-icon name="logo-facebook" size="large"></ion-icon>
              </a>
              <a className="pagina" href="https://www.youtube.com/channel/UC94EeNbFYtW6vIUds8qR94A" target="_blank" rel="noreferrer">
                <ion-icon name="logo-youtube" size="large"></ion-icon>
              </a>
            </div>
          </div>
          <div>
            <p className='number'>04</p>
          </div>
        </div>
        <footer>
          <p>{selectLan ? 'Developed by ' : 'Desarrollado por '}<span>Andres Montoya Angulo</span></p>
        </footer>
      </section>
    </div>
  );
}

export default withRouter(Home);
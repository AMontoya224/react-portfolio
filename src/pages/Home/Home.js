import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Left from '../../components/Left/Left';


function Home(props) {
  const { selectLeft, scrollSelect, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan, theme } = props;
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
    if (window.screen.width > 970 ){
      let wolf = document.getElementById('H-wolf');
      let img = document.getElementById('H-img');
      document.onmousemove = function (e) {
        wolf.style.left = ((e.pageX) / 50) + 340 + 'px';
        wolf.style.top = ((e.pageY) / 50) - 320 + 'px';
        img.style.left = ((e.pageX) / 30) + 790 + 'px';
        img.style.top = ((e.pageY) / 30) + 120 + 'px';
      }
    }
  }, 0);

  const onBtnWorks = () => {
    onSelectLeft('#1');
    props.history.push('/projects');
    testRef1.current.scrollIntoView({ block: "start" });
  };

  const onBtnWorksD = () => {
    onSelectLeft('#1');
    props.history.push('/projects/programming');
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

  return (
    <div className="Home">
      <title>{selectLan ? 'Home | PORTFOLIO' : 'Inicio | PORTAFOLIO'}</title>
      <Left selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} />
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
      <img id='H-img' className={selectLeft === '#1' ? 'H-img' : 'H-img active'} src={theme ? require('./../../images/island.webp') : require('./../../images/wolf.webp')} alt='wolf'/>

      <main>
        <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect('#1')} onTouchStart={() => scrollSelect('#1')}>
          <h1 className={selectLeft === '#1' ? 'H-title' : 'H-title active'}>ANDRES MONTOYA</h1>
          <button className={btnSub && selectLeft === '#1' ? 'H-sub active' : selectLeft === '#1' ? 'H-sub' : 'H-sub off'} onClick={onBtnSub}>
            <div className={btnSub ? 's1 active' : 's1'}></div>
            {btnSub ? 'PORTFOLIO' : 'CLICK'}
            <div className={btnSub ? 's2 active' : 's2'}></div>
          </button>
          <div id='CH-main'>
            <p className={selectLeft === '#1' ? 'H-main' : 'H-main active'}>{selectLan ? 'Full stack developer /' : 'Desarrollador full stack /'}</p>
            <p className={selectLeft === '#1' ? 'H-main' : 'H-main active'}>{selectLan ? 'Electronic engineer /' : 'Ingeniero electrónico /'}</p>
            <p className={selectLeft === '#1' ? 'H-main' : 'H-main active'}>{selectLan ? 'Investigator' : 'Investigador'}</p>
          </div>
        </section>

        <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect('#2')} onTouchStart={() => scrollSelect('#2')}>
          <h2 className={selectLeft === '#2' ? 'H-title' : 'H-title active'}>{selectLan ? 'Projects' : 'Proyectos'}</h2>
          <div>
            <div>
              <p className={selectLeft === '#2' ? 'H-main' : 'H-main active'}>{selectLan ? 'Passion for creating amazing products' : 'Pasión por crear productos increíbles'}</p>
              <div className='W-container'>
                <div onClick={onBtnWorksD}>
                  <img className={selectLeft === '#2' ? '' : 'active'} src={require('./../../images/developer.webp')} alt='developer'/>
                  <p>{selectLan ? 'PROGRAMMING' : 'PROGRAMACIÓN'}</p>
                </div>
                <div onClick={onBtnWorksE}>
                  <img className={selectLeft === '#2' ? '' : 'active'} src={require('./../../images/electronic.webp')} alt='electronic'/>
                  <p>{selectLan ? 'ELECTRONICS' : 'ELECTRÓNICA'}</p>
                </div>
              </div>
              <button className={selectLeft === '#2' ? 'H-sub' : 'H-sub off'} onClick={onBtnWorks}>
                <div className='s1'></div>
                {selectLan ? 'SHOW ME MORE' : 'MUESTRAME MAS'}
                <div className='s2'></div>
              </button>
            </div>
            <p className={selectLeft === '#2' ? 'number' : 'number active'}>02</p>
          </div>
          <footer></footer>
        </section>

        <section className='three' ref={testRef3} onMouseEnter={() => scrollSelect('#3')} onTouchStart={() => scrollSelect('#3')}>
          <h2 className={selectLeft === '#3' ? 'H-title' : 'H-title active'}>{selectLan ? 'About me' : 'Sobre mí'}</h2>
          <div>
            <div>
              <p className={selectLeft === '#3' ? 'H-main' : 'H-main active'}>{selectLan ? 'I love design, technology and creativity' : 'Me encanta el diseño, la tecnología y la creatividad'}</p>
              <img className={selectLeft === '#3' ? '' : 'active'} src={require('./../../images/perfil2.webp')} alt='foto'/>
              <button className={selectLeft === '#3' ? 'H-sub' : 'H-sub off'} onClick={onBtnAboutMe}>
                <div className='s1'></div>
                {selectLan ? 'SHOW ME MORE' : 'MUESTRAME MAS'}
                <div className='s2'></div>
              </button>
            </div>
            <p className={selectLeft === '#3' ? 'number' : 'number active'}>03</p>
          </div>
          <footer></footer>
        </section>

        <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect('#4')} onTouchStart={() => scrollSelect('#4')}>
          <h2 className={selectLeft === '#4' ? 'H-title' : 'H-title active'}>{selectLan ? 'Get In Touch' : 'Contáctame'}</h2>
          <div>
            <div>
              <a href="mailto:montyang224@gmail.com?subject=Quiero contactar contigo Andres!" className={selectLeft === '#4' ? '' : 'active'}>
                montyang224@gmail.com
              </a>
              <a className={selectLeft === '#4' ? 'whatsapp' : 'whatsapp active'} href="https://wa.me/51954222771/?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank" rel="noreferrer">
                +51 954 222 771
              </a>
              <div className={selectLeft === '#4' ? 'container' : 'container active'}>
                <a className="pagina" href="https://www.linkedin.com/in/amontoya224/" target="_blank" rel="noreferrer">
                  <ion-icon name="logo-linkedin" size="large"></ion-icon>
                </a>
                <a className="pagina" href="https://github.com/AMontoya224" target="_blank" rel="noreferrer">
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </a>
                <a className="pagina" href="https://scholar.google.com/citations?user=LI023coAAAAJ&hl=es" target="_blank" rel="noreferrer">
                  <ion-icon name="logo-chrome" size="large"></ion-icon>
                </a>
                <a className="pagina" href='https://drive.google.com/file/d/1cDq6dwEz-__-pBYQ0giWHg_A161lLNeA/view?usp=sharing' target="_blank" rel="noreferrer">
                  <img src={theme ? require('./../../images/iconduck/cv2.jpg') : require('./../../images/iconduck/cv.jpg')} alt='cv' title='Curriculum Vitae' />
                </a>
                <a className="pagina" href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=140140" target="_blank" rel="noreferrer">
                  <img src={require('./../../images/iconduck/concytec.png')} alt='concytec' title='Concytec' />
                </a>
                <a className="pagina" href="https://web.facebook.com/juan.andres.montoya.angulo" target="_blank" rel="noreferrer">
                  <ion-icon name="logo-facebook" size="large"></ion-icon>
                </a>
                <a className="pagina" href="https://www.youtube.com/channel/UC94EeNbFYtW6vIUds8qR94A" target="_blank" rel="noreferrer">
                  <ion-icon name="logo-youtube" size="large"></ion-icon>
                </a>
              </div>
              <button className={selectLeft === '#4' ? 'H-sub' : 'H-sub off'} onClick={onBtnContact}>
                <div className='s1'></div>
                {selectLan ? 'SHOW ME MORE' : 'MUESTRAME MAS'}
                <div className='s2'></div>
              </button>
            </div>
            <p className={selectLeft === '#4' ? 'number' : 'number active'}>04</p>
          </div>
          <footer>
            <p>{selectLan ? 'Developed by ' : 'Desarrollado por '}<span>Andres Montoya Angulo</span></p>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default withRouter(Home);
import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import './Home.css';
import wolf from './../../images/wolf.png';
import Left2 from '../../components/Left/Left2';
import cv from './../../images/cv.png';
import concytec from './../../images/concytec.png';
import developer from './../../images/developer.jpg';
import electronic from './../../images/electronic.jpg';


function Home( props ) {
  const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4 } = props;
  const [btnSub, setBtnSub] = useState( false );

  const onBtnSub = () => {
    if(!btnSub){
      setBtnSub( true );
    }
    else{
      setBtnSub( false );
    }
  };

  setTimeout(()=>{
    let wolf = document.getElementById( 'H-wolf' );
    let img = document.getElementById( 'H-img' );
    document.onmousemove=function (e) {
      wolf.style.left=( ( e.pageX ) / 50) + 340 + 'px';
      wolf.style.top=( ( e.pageY ) / 50) - 320 + 'px';
      img.style.left=( ( e.pageX ) / 30) + 790 + 'px';
      img.style.top=( ( e.pageY ) / 30) + 120 + 'px';
    }
  }, 500);

  const onBtnWorks = () => {
    onSelectLeft( '#1' );
    props.history.push( '/works' );
    testRef1.current.scrollIntoView( {block: "start"} );
  };

  const onBtnWorksD = () => {
    onSelectLeft( '#1' );
    props.history.push( '/works/developer' );
    testRef1.current.scrollIntoView( {block: "start"} );
  };

  const onBtnWorksE = () => {
    onSelectLeft( '#1' );
    props.history.push( '/works/electronic' );
    testRef1.current.scrollIntoView( {block: "start"} );
  };

  const onBtnAboutMe = () => {
    onSelectLeft( '#1' );
    props.history.push( '/aboutme' );
    testRef1.current.scrollIntoView( {block: "start"} );
  };

  const onBtnContact = () => {
    props.history.push( '/contact' );
    testRef1.current.scrollIntoView( {block: "start"} );
  };

  return (
    <div className="Home">
      <Left2 selectLeft={selectLeft} onSelectLeft={onSelectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
      <div className='section-1' id='section1' ref={testRef1}>
        <p className='H-title'>ANDRES</p>
        <p className='H-title'>MONTOYA</p>
        <button className={btnSub ? 'H-sub active' : 'H-sub'} onClick={onBtnSub}>
          <div className={btnSub ? 's1 active' : 's1'}></div>
          {btnSub ? 'PORTFOLIO' : 'CLICK'}
          <div className={btnSub ? 's2 active' : 's2'}></div>
        </button>
        <p className='H-main'>Full stack developer /</p>
        <p className='H-main'>Electronic engineer /</p>
        <p className='H-main'>Investigator</p>
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
      </div>
      <img id='H-img' className='H-img' src={wolf} alt='wolf'/>

      <div className='section-2' id='section2' ref={testRef2}>
        <p className='H-title' onClick={onBtnWorks}>Projects</p>
        <button onClick={onBtnWorks} className='H-sub'>
          <div className='s1'></div>
            Show me more
          <div className='s2'></div>
        </button>
        <p className='H-main'>Passion for creating amazing products.</p>
        <div>
          <img onClick={onBtnWorksD} src={wolf} alt='electronic'/>
          <img onClick={onBtnWorksE} src={developer} alt='electronic'/>
          <img onClick={onBtnWorksD} src={electronic} alt='electronic'/>
          <img onClick={onBtnWorksE} src={wolf} alt='electronic'/>
        </div>
        <p className='number'>02</p>
        <img onClick={onBtnWorks} src={electronic} alt='electronic'/>
      </div>

      <div className='section-3' id='section3'  ref={testRef3}>
        <p className='H-title' onClick={onBtnAboutMe}>About Me</p>
        <button onClick={onBtnAboutMe} className='H-sub'>
          <div className='s1'></div>
            Show me more
          <div className='s2'></div>
        </button>
        <p className='H-main'>I love Design, Technology, and Story.</p>
        <p className='number'>03</p>
      </div>

      <div className='section-4' id='section4'  ref={testRef4}>
        <div className="Contact">
          <p className='H-title' onClick={onBtnContact}>Get In Touch</p>
          <button className={btnSub ? 'H-sub active' : 'H-sub'} onClick={onBtnSub}>
              <div className={btnSub ? 's1 active' : 's1'}></div>
              {btnSub ? 'THANK!' : 'CLICK'}
              <div className={btnSub ? 's2 active' : 's2'}></div>
          </button>
          <a href="mailto:jmontoyaan@unsa.edu.pe?subject=Quiero contactar contigo Andres!">
              jmontoyaan@unsa.edu.pe
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
            <a className="pagina" href='https://drive.google.com/file/d/1VMg9fMJClXj3eSKCVz18-bn8OM4CR-tn/view?usp=sharing' target="_blank" rel="noreferrer">
                <img src={cv} alt='cv'/>
            </a>
            <a className="pagina" href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=140140" target="_blank" rel="noreferrer">
                <img src={concytec} alt='concytec'/>
            </a>
            <a className="pagina" href="https://web.facebook.com/juan.andres.montoya.angulo" target="_blank" rel="noreferrer">
                <ion-icon name="logo-facebook" size="large"></ion-icon>
            </a>
            <a className="pagina" href="https://www.youtube.com/channel/UC94EeNbFYtW6vIUds8qR94A" target="_blank" rel="noreferrer">
                <ion-icon name="logo-youtube" size="large"></ion-icon>
            </a>
          </div>
          <footer>
            <p>Developed by <span>Andres Montoya Angulo</span></p>
          </footer>
          <p className='number'>04</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter( Home );
import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import wolf from './../../images/wolf.png';
import Works from '../Works/Works';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';

function Home( props ) {
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
      wolf.style.left=( ( e.pageX ) / 50) + 500 + 'px';
      wolf.style.top=( ( e.pageY ) / 50) - 180 + 'px';
      img.style.left=( ( e.pageX ) / 40) + 290 + 'px';
      img.style.top=( ( e.pageY ) / 40) + 290 + 'px';
    }
  }, 500);

  const testRef1 = useRef(null);
  const testRef3 = useRef(null);
  const testRef4 = useRef(null);
  const scrollToElement1 = () => testRef1.current.scrollIntoView({block: "start", behavior: "smooth"});
  const scrollToElement3 = () => testRef3.current.scrollIntoView({block: "start", behavior: "smooth"});
  const scrollToElement4 = () => testRef4.current.scrollIntoView({block: 'start', behavior: 'smooth'});
  
  return (
    <div className="Home">
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
        <button onClick={scrollToElement3}>Trigger the scroll</button>
        <button onClick={scrollToElement4}>Trigger the scroll</button>
        <div id='H-wolf'>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <img id='H-img' className='H-img' src={wolf} alt='wolf'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section-2' id='section2'>
        <p className='H-title'>EVERTASK</p>
          <p className='H-title'>web</p>
          <button className={btnSub ? 'H-sub active' : 'H-sub'} onClick={onBtnSub}>
            <div className={btnSub ? 's1 active' : 's1'}></div>
            {btnSub ? 'PORTFOLIO' : 'CLICK'}
            <div className={btnSub ? 's2 active' : 's2'}></div>
          </button>
          <p className='H-main'>Full stack developer /</p>
          <p className='H-main'>Electronic engineer /</p>
          <p className='H-main'>Investigator</p>
        </div>

        <div className='ref3' ref={testRef3}>Element you want to view</div>
      <div className='section-3' id='section3'>
        <h1>About Me</h1>
      </div>

      <div ref={testRef4}>Element you want to view</div>

      <div className='section-4' id='section4'>
        <h1>Contact</h1>
        <button onClick={scrollToElement1}>Trigger the scroll</button>
      </div>
    </div>
  );
}

export default withRouter( Home );
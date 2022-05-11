import React, { useState } from 'react';
import './Home.css';
import wolf from './../../images/wolf2.png';

function Home() {
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
    document.onmousemove=function (e) {
      wolf.style.left=( ( e.pageX ) / 50) + 560 + 'px';
      wolf.style.top=( ( e.pageY ) / 50) - 150 + 'px';
    }
  }, 500);
  

  return (
    <div className="Home">
      <p className='H-title'>ANDRES</p>
      <p className='H-title'>MONTOYA</p>
      <button className={btnSub ? 'H-sub active' : 'H-sub'} onClick={onBtnSub}>
        <div className={btnSub ? 's1 active' : 's1'}></div>
        PORTFOLIO
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
                <div>
                  <img className='H-img' src={wolf} alt='wolf'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
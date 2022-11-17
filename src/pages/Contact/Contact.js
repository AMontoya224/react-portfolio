import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Contact.css';
import cv from './../../images/cv.png';
import concytec from './../../images/concytec.png';


function Contact( props ) {
    const { onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;;
    const [btnSub, setBtnSub] = useState( false );

    const onBtnSub = () => {
        if(!btnSub){
          setBtnSub( true );
        }
        else{
          setBtnSub( false );
        }
    };

    const scrollToBack = () => {
        onSelectLeft( '#4' );
        props.history.push("/");
        testRef4.current.scrollIntoView( {block: "start"} );
    };

    return (
        <div className="Contact">
            <title>{selectLan ? 'Contact | PORTFOLIO' : 'Contacto | PORTAFOLIO'}</title>
            <div className='section1' ref={testRef1}>
                <button onClick={scrollToBack} className='C-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
                <p className='H-title'>{selectLan ? 'Get In Touch' : 'Contáctame'}</p>
                <button className={btnSub ? 'H-sub active' : 'H-sub'} onClick={onBtnSub}>
                    <div className={btnSub ? 's1 active' : 's1'}></div>
                    {btnSub ? 'THANK!' : 'CLICK'}
                    <div className={btnSub ? 's2 active' : 's2'}></div>
                </button>
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
            </div>
            <div className='section2' ref={testRef2}></div>
            <div className='section3' ref={testRef3}></div>
            <div className='section4' ref={testRef4}></div>
        </div>
    );
}

export default withRouter( Contact );
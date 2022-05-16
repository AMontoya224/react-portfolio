import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import './Contact.css';
import cv from './../../images/cv.png';
import concytec from './../../images/concytec.png';


function Contact( props ) {
    const { onSelectLeft } = props;
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
        scroll.scrollMore(2000);
    };

    return (
        <div className="Contact">
            <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span> BACK</button>
            <p className='H-title'>Get In Touch</p>
            <button className={btnSub ? 'H-sub active' : 'H-sub'} onClick={onBtnSub}>
                <div className={btnSub ? 's1 active' : 's1'}></div>
                {btnSub ? 'THANK!' : 'CLICK'}
                <div className={btnSub ? 's2 active' : 's2'}></div>
            </button>
            <a href="mailto:jmontoyaan@unsa.edu.pe">
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
        </div>
    );
}

export default withRouter( Contact );
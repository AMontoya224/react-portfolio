import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Contact.css';


function Contact( props ) {
    const { onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan, theme } = props;;
    const [btnSub, setBtnSub] = useState( false );

    const onBtnSub = () => {
        if(!btnSub){
          setBtnSub( true );
        }
        else{
          setBtnSub( false );
        }
    };

    const toBack = () => {
        props.history.push('/');
        setTimeout( () => {
            onSelectLeft('#4');
            testRef4.current.scrollIntoView({block: 'start'})
        }, 0);
    };

    return (
        <div className="Contact">
            <title>{selectLan ? 'Contact | PORTFOLIO' : 'Contacto | PORTAFOLIO'}</title>
            <main>
                <section className='one' ref={testRef1}>
                    <button onClick={toBack} className='B-return'><span className="material-icons-round">keyboard_backspace</span><p>BACK</p></button>
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
                            <img src={theme ? require('./../../images/iconduck/cv2.jpg') : require('./../../images/iconduck/cv.jpg')} alt='cv' title='Curriculum Vitae'/>
                        </a>
                        <a className="pagina" href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=140140" target="_blank" rel="noreferrer">
                            <img src={require('./../../images/iconduck/concytec.png')} alt='concytec' title='Concytec'/>
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
                </section>

                <section className='two' ref={testRef2}></section>

                <section className='three' ref={testRef3}></section>

                <section className='four' ref={testRef4}></section>
            </main>
        </div>
    );
}

export default withRouter( Contact );
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';


function Header( props ) {
    const {onSelectLeft} = props;
    const [btnEsc, setBtnEsc] = useState( false );

    const onBtnEsc = () => {
        if(!btnEsc){
            setBtnEsc( true );
        }
        else{
            setBtnEsc( false );
        }
    };

    const onHome = () => {
        onSelectLeft( 'home' );
        props.history.push( '/' );
    };

    const onBtnHome = () => {
        onBtnEsc();
        onSelectLeft( 'home' );
        props.history.push( '/' );
    };

    const onBtnWorks = () => {
        onBtnEsc();
        onSelectLeft( 'works' );
        props.history.push( '/works' );
    };

    const onBtnAboutMe = () => {
        onBtnEsc();
        onSelectLeft( 'aboutMe' );
        props.history.push( '/aboutme' );
    };

    const onBtnContact = () => {
        onBtnEsc();
        onSelectLeft( 'contact' );
        props.history.push( '/contact' );
    };

    return (
        <div className="Header">
            <p onClick={onHome}>
                Monty<b>Ang</b>
            </p>
            <b></b>
            <span className="material-icons-round">engineering</span>
            <a class="whatsapp_A" href="https://wa.me/51954222771/?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank">
                <ion-icon name="logo-whatsapp" size="large"></ion-icon>
             </a>
            <span className="material-icons-round">engineering</span>
            <button className='H-btn' onClick={onBtnEsc}><div className={btnEsc ? 's1 active' : 's1'}></div><div className={btnEsc ? 's2 active' : 's2'}></div></button>
            <div className={btnEsc ? 'menu menu-fw' : 'menu menu-bk'}>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnHome}>HOME</button>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnWorks}>WORKS</button>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnAboutMe}>ABOUT ME</button>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnContact}>CONTACT</button>
                <span className={btnEsc ? 'material-icons-round menu-p' : 'material-icons-round menu-np'}>engineering</span>
                <a href="https://wa.me/51954222771/?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank">
                    <ion-icon name="logo-whatsapp" size="large"></ion-icon>
                </a>
                <span className={btnEsc ? 'material-icons-round menu-p' : 'material-icons-round menu-np'}>engineering</span>
            </div>
        </div>
    );
}

export default withRouter( Header );
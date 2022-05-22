import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import './Header.css';


function Header( props ) {
    const {onSelectLeft, testRef1} = props;
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
        onSelectLeft( '#1' );
        props.history.push( '/' );
        testRef1.current.scrollIntoView( {block: "start", behavior: "smooth"} )
    };

    const onBtnHome = () => {
        onBtnEsc();
        onSelectLeft( '#1' );
        props.history.push( '/' );
        testRef1.current.scrollIntoView( {block: "start", behavior: "smooth"} )
    };

    const onBtnWorks = () => {
        onBtnEsc();
        onSelectLeft( '#1' );
        scroll.scrollMore(0);
        props.history.push( '/works' );
    };

    const onBtnAboutMe = () => {
        onBtnEsc();
        onSelectLeft( '#1' );
        scroll.scrollMore(0);
        props.history.push( '/aboutme' );
    };

    const onBtnContact = () => {
        onBtnEsc();
        onSelectLeft( '#1' );
        scroll.scrollMore(0);
        props.history.push( '/contact' );
    };

    return (
        <div className="Header">
            <p onClick={onHome}>
                Monty<b>Ang</b>
            </p>
            <b></b>
            <div className='H-row'>
                <a href="mailto:jmontoyaan@unsa.edu.pe">
                    <ion-icon name="mail-outline" size="large"></ion-icon>
                </a>
                <a  className='wpp' href="https://wa.me/51954222771/?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-whatsapp" size="large"></ion-icon>
                </a>
                <a href="https://amontoya224.com/" target="_blank" rel="noreferrer">
                    AMontoya224
                </a>
                <button className='H-btn' onClick={onBtnEsc}><div className={btnEsc ? 's1 active' : 's1'}></div><div className={btnEsc ? 's2 active' : 's2'}></div></button>
            </div>
            <div className={btnEsc ? 'menu menu-fw' : 'menu menu-bk'}>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnHome}>HOME</button>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnWorks}>WORKS</button>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnAboutMe}>ABOUT ME</button>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnContact}>CONTACT</button>
                <div>
                    <a className={btnEsc ? 'menu-a' : 'menu-na'} href="mailto:jmontoyaan@unsa.edu.pe">
                        <ion-icon name="mail-outline" size="large"></ion-icon>
                    </a>
                    <a  className={btnEsc ? 'menu-a' : 'menu-na'} href="https://wa.me/51954222771/?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-whatsapp" size="large"></ion-icon>
                    </a>
                    <a className={btnEsc ? 'menu-a' : 'menu-na'} href="https://amontoya224.com/" target="_blank" rel="noreferrer">
                        AMontoya224
                    </a>
                </div>
            </div>
        </div>
    );
}

export default withRouter( Header );
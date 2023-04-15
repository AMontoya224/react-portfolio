import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Theme from '../Theme/Theme';
import './Header.css';


function Header( props ) {
    const { onSelectLeft, testRef1, selectLan, onSelectLan } = props;
    const [btnEsc, setBtnEsc] = useState( false );

    const onBtnEsc = () => {
        if(!btnEsc){
            setBtnEsc( true );
        }
        else{
            setBtnEsc( false );
        }
    };

    const onBtnLan = () => {
        if(!selectLan){
            onSelectLan( true );
        }
        else{
            onSelectLan( false );
        }
    };

    const onHome = () => {
        setBtnEsc( false );
        onSelectLeft( '#1' );
        props.history.push( '/' );
        testRef1.current.scrollIntoView( {block: "start", behavior: "smooth"} );
    };

    const onBtnHome = () => {
        onBtnEsc();
        onSelectLeft( '#1' );
        props.history.push( '/' );
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    const onBtnWorks = () => {
        onBtnEsc();
        onSelectLeft( '#1' );
        props.history.push( '/projects' );
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    const onBtnAboutMe = () => {
        onBtnEsc();
        onSelectLeft( '#1' );
        props.history.push( '/aboutme' );
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    const onBtnContact = () => {
        onBtnEsc();
        props.history.push( '/contact' );
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    return (
        <div className="Header">
            <p onClick={onHome}>
                Monty<b>Ang</b>
            </p>
            <b></b>
            <div className='H-row'>
                {/*<a  href="https://amontoya224.com/" target="_blank" rel="noreferrer">
                    <ion-icon name="globe-outline" size="large"></ion-icon>
                </a>*/}
                <a href="mailto:jmontoyaan@unsa.edu.pe?subject=Quiero contactar contigo Andres!">
                    <ion-icon name="mail-outline" size="large"></ion-icon>
                </a>
                <Theme/>
                <button className='L-btn' onClick={onBtnLan}>{selectLan ? 'Español' : 'English'}</button>
                <button className='H-btn' onClick={onBtnEsc}><div className={btnEsc ? 's1 active' : 's1'}></div><div className={btnEsc ? 's2 active' : 's2'}></div></button>
            </div>
            <div className={btnEsc ? 'menu menu-fw' : 'menu menu-bk'}>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnHome}>{selectLan ? 'HOME' : 'INICIO'}</button>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnWorks}>{selectLan ? 'PROJECTS' : 'PROYECTOS'}</button>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnAboutMe}>{selectLan ? 'ABOUT ME' : 'SOBRE MÍ'}</button>
                <button className={btnEsc ? 'menu-p' : 'menu-np'} onClick={onBtnContact}>{selectLan ? 'CONTACT' : 'CONTACTO'}</button>
                <div>
                    {/*<a className={btnEsc ? 'menu-a' : 'menu-na'} href="https://amontoya224.com/" target="_blank" rel="noreferrer">
                        <ion-icon name="globe-outline" size="large"></ion-icon>
                    </a>*/}
                    <Theme/>
                    <a className={btnEsc ? 'menu-a' : 'menu-na'} href="mailto:jmontoyaan@unsa.edu.pe?subject=Quiero contactar contigo Andres!">
                        <ion-icon name="mail-outline" size="large"></ion-icon>
                    </a>
                    <button className={btnEsc ? 'menu-a' : 'menu-na'} onClick={onBtnLan}>{selectLan ? 'English' : 'Español'}</button>
                </div>
            </div>
        </div>
    );
}

export default withRouter( Header );
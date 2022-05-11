import React, { useState } from 'react';
import './Header.css';


function Header() {
    const [btnEsc, setBtnEsc] = useState( false );

    const onBtnEsc = () => {
        if(!btnEsc){
            setBtnEsc( true );
        }
        else{
            setBtnEsc( false );
        }
    };

    return (
        <div className="Header">
            <p>
                Monty<b>Ang</b>
            </p>
            <span className="material-icons-round">engineering</span>
            <span className="material-icons-round">engineering</span>
            <span className="material-icons-round">engineering</span>
            <button className='H-btn' onClick={onBtnEsc}><div className={btnEsc ? 's1 active' : 's1'}></div><div className={btnEsc ? 's2 active' : 's2'}></div></button>
            <div className={btnEsc ? 'menu menu-fw' : 'menu menu-bk'}>
                <p>Home</p>
                <p>Works</p>
                <p>About me</p>
                <p>Contact</p>
                <span className="material-icons-round">engineering</span>
                <span className="material-icons-round">engineering</span>
                <span className="material-icons-round">engineering</span>
            </div>
        </div>
    );
}

export default Header;
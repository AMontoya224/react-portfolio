import React, { useState } from 'react';
import './Theme.css';


function Theme(props){
    const { setTheme } = props;
    const [iconTheme, setIconTheme] = useState( () => {
        const initialValue = JSON.parse( localStorage.getItem( 'iconTheme' ) );
        return initialValue || false;
    });

    const changeTheme = () => {
        document.body.classList.toggle( 'dark-theme-variables' );
        if( document.body.classList.toString() === '' ){
            localStorage.setItem( 'iconTheme', JSON.stringify( false ) );
            setIconTheme( false );
            setTheme( false );
        }
        else{
            localStorage.setItem( 'iconTheme', JSON.stringify( true ) );
            setIconTheme( true );
            setTheme( true );
        }
    };

    return (
        <div className='Theme' onClick={changeTheme}>
            <span className='material-icons-round'>
                {iconTheme ? 'dark_mode' : 'light_mode'}
            </span>
        </div>
    )
};

export default Theme;
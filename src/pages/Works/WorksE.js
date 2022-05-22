import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Left2 from '../../components/Left/Left2';
import './Works.css';


function Works_E( props ) {
    const { selectLeft, onSelectLeft } = props;
    const testRef1 = useRef( null );
    const testRef2 = useRef( null );
    const testRef3 = useRef( null );
    const testRef4 = useRef( null );

    const scrollToBack = () => {
        props.history.push("/works");
    };

    return (
        <div className="Works">
            <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span> BACK</button>
            <Left2 onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4} />
            <p className='H-title'>Electronic</p>
            <div className='section1'ref={testRef1}></div>
            <div className='section2'ref={testRef2}></div>
            <div className='section3'ref={testRef3}></div>
            <div className='section4'ref={testRef4}></div>
            <footer>
                <p>Developed by <span>Andres Montoya Angulo</span></p>
            </footer>
        </div>
    );
}

export default withRouter( Works_E );
import React from 'react';
import { withRouter } from 'react-router-dom';
import Left2 from '../../components/Left/Left2';
import './Works.css';


function Works_E( props ) {
    const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4 } = props;

    const scrollToBack = () => {
        props.history.push("/works");
    };

    return (
        <div className="WorksE">
            <div className='section1'ref={testRef1}>
                <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
                <Left2 onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
                <p className='H-title'>Electronic</p>
            </div>
            <div className='section2'ref={testRef2}></div>
            <div className='section3'ref={testRef3}></div>
            <div className='section4'ref={testRef4}>
                <footer>
                    <p>Developed by <span>Andres Montoya Angulo</span></p>
                </footer>
            </div>
        </div>
    );
}

export default withRouter( Works_E );
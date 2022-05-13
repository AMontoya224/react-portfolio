import { withRouter,Switch, BrowserRouter, Route } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import './Works.css';


function Works() {
    return (
        <div className="Works">
            <div className='section-2' id='section2'>
                <p className='H-title'>EVERTASK</p>
                <p className='H-title'>web</p>
                <button className='H-sub'>
                    <div className='s1'></div>
                    <div className='s2'></div>
                </button>
                <p className='H-main'>Full stack developer /</p>
                <p className='H-main'>Electronic engineer /</p>
                <p className='H-main'>Investigator</p>
            </div>
        </div>
    );
}

export default withRouter( Works );
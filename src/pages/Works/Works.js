import {Link, withRouter} from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import './Works.css';


function Works( props ) {
    const { onSelectLeft } = props;

    const scrollToBack = () => {
        onSelectLeft( '#2' );
        props.history.push("/");
        scroll.scrollMore(550);
    };

    return (
        <div className="Works">
            <div className='section-2' id='section2'>
                <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span> BACK</button>
                <p className='H-title'>EVERTASK</p>
                <p className='H-title'>web</p>
                <button className='H-sub'>
                    <div className='s1'></div>
                    <div className='s2'></div>
                </button>
                <Link to='/works/developer'><p>Developer</p></Link>
                <Link to='/works/electronic'><p>Electronic</p></Link>
            </div>
        </div>
    );
}

export default withRouter( Works );
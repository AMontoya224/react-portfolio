import { withRouter } from 'react-router-dom';
import { Link } from "react-scroll";
//import { Link, animateScroll as scroll } from "react-scroll";
import './Left.css';


function Left( props ) {
    const {onSelectLeft} = props;
    const {selectLeft} = props;

    const onBtnHome = () => {
        onSelectLeft( 'home' );
        props.history.push( '/' );
    };

    const onBtnWorks = () => {
        onSelectLeft( 'works' );
        props.history.push( '/works' );
    };

    const onBtnAboutMe = () => {
        onSelectLeft( 'aboutMe' );
        props.history.push( '/aboutme' );
    };

    const onBtnContact = () => {
        onSelectLeft( 'contact' );
        props.history.push( '/contact' );
    };

    

    return (
        <div className="Left">
            <div></div>
            <div>
                <button className={selectLeft === 'home' ? 'active' : 'active' } onClick={onBtnHome}>
                    <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}></Link>
                </button>
                <button className={selectLeft === 'works' ? 'active' : '' } onClick={onBtnWorks}>
                    <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}></Link>
                </button>
                <button className={selectLeft === 'aboutMe' ? 'active' : 'active' } onClick={onBtnAboutMe}></button>
                <button className={selectLeft === 'contact' ? 'active' : 'active' } onClick={onBtnContact}></button>
            </div>
            <div>
                <div className={selectLeft === 'home' ? 'L-scroll' : 'L-scroll active' }>
                    <p>SCROLLDOWN</p>
                <div></div>
            </div>
            </div>
        </div>
    );
}

export default withRouter( Left );
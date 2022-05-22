import { withRouter} from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import './Works.css';
import developer from './../../images/developer.jpg';
import electronic from './../../images/electronic.jpg';


function Works( props ) {
    const { onSelectLeft } = props;

    const scrollToBack = () => {
        onSelectLeft( '#2' );
        props.history.push("/");
        scroll.scrollMore(660);
    };

    const onBtnWorksD = () => {
        onSelectLeft( '#1' );
        props.history.push( '/works/developer' );
      };
    
    const onBtnWorksE = () => {
        onSelectLeft( '#1' );
        props.history.push( '/works/electronic' );
    };

    return (
        <div className="Works">
            <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span> BACK</button>
            <p className='H-title'>Projects</p>
            <div className='W-container'>
                <div onClick={onBtnWorksD} >
                    <img src={developer} alt='electronic'/>
                </div>
                <div onClick={onBtnWorksE}>
                    <img src={electronic} alt='electronic'/>
                </div>
            </div>
            <footer>
                <p>Developed by <span>Andres Montoya Angulo</span></p>
            </footer>
        </div>
    );
}

export default withRouter( Works );
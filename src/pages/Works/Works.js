import { withRouter} from 'react-router-dom';
import './Works.css';
import developer from './../../images/developer.jpg';
import electronic from './../../images/electronic.jpg';


function Works( props ) {
    const { onSelectLeft, testRef1, testRef2, testRef3, testRef4 } = props;

    const scrollToBack = () => {
        onSelectLeft( '#2' );
        props.history.push("/");
        testRef2.current.scrollIntoView( {block: "start"} );
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
        <div className="Works" ref={testRef1}>
            <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
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
            <div className='section2' ref={testRef2}></div>
            <div className='section3' ref={testRef3}></div>
            <div className='section4' ref={testRef4}></div>
        </div>
    );
}

export default withRouter( Works );
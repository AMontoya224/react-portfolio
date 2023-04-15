import { withRouter} from 'react-router-dom';
import './Works.css';


function Works( props ) {
    const { onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

    const scrollToBack = () => {
        onSelectLeft( '#2' );
        props.history.push("/");
        testRef2.current.scrollIntoView( {block: "start"} );
    };

    const onBtnWorksD = () => {
        onSelectLeft( '#1' );
        props.history.push( '/projects/developer' );
      };
    
    const onBtnWorksE = () => {
        onSelectLeft( '#1' );
        props.history.push( '/projects/electronic' );
    };

    return (
        <div className="Works">
            <title>{selectLan ? 'Works | PORTFOLIO' : 'Trabajos | PORTAFOLIO'}</title>
            <div className='section1' ref={testRef1}>
                <button onClick={scrollToBack} className='W-return'><span className="material-icons-round">keyboard_backspace</span><p>BACK</p></button>
                <p className='H-title'>{selectLan ? 'Projects' : 'Proyectos'}</p>
                <div className='W-container'>
                    <div onClick={onBtnWorksD}>
                        <img className='wd-img' src={require('./../../images/developer.png')} alt='developer'/>
                        <p>{selectLan ? 'DEVELOPING' : 'DESARROLLO'}</p>
                    </div>
                    <div onClick={onBtnWorksE}>
                        <img className='we-img' src={require('./../../images/electronic.png')} alt='electronic'/>
                        <p>{selectLan ? 'ELECTRONICS' : 'ELECTRÓNICA'}</p>
                    </div>
                </div>
                <footer>
                    <p>{selectLan ? 'Developed by ' : 'Desarrollado por '}<span>Andres Montoya Angulo</span></p>
                </footer>
            </div>
            <div className='section2' ref={testRef2}></div>
            <div className='section3' ref={testRef3}></div>
            <div className='section4' ref={testRef4}></div>
        </div>
    );
}

export default withRouter( Works );
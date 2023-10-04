import { withRouter} from 'react-router-dom';
import './Works.css';


function Works( props ) {
    const { onSelectLeft, testRef1, testRef2, selectLan } = props;

    const toBack = () => {
        props.history.push('/');
        setTimeout( () => {
            onSelectLeft('#2');
            testRef2.current.scrollIntoView({block: 'start'})
        }, 0);
    };

    const onBtnWorksD = () => {
        onSelectLeft( '#1' );
        props.history.push( '/projects/programming' );
      };
    
    const onBtnWorksE = () => {
        onSelectLeft( '#1' );
        props.history.push( '/projects/electronic' );
    };

    return (
        <div className="Works">
            <title>{selectLan ? 'Works | PORTFOLIO' : 'Trabajos | PORTAFOLIO'}</title>
            
            <main>
                <section className='one' ref={testRef1}>
                    <button onClick={toBack} className='B-return'><span className="material-icons-round">keyboard_backspace</span><p>BACK</p></button>
                    <h2 className='H-title'>{selectLan ? 'Projects' : 'Proyectos'}</h2>
                    <div className='W-container'>
                        <div onClick={onBtnWorksD}>
                            <img className='wd-img' src={require('./../../images/developer.webp')} alt='developer'/>
                            <p>{selectLan ? 'PROGRAMMING' : 'PROGRAMACIÓN'}</p>
                        </div>
                        <div onClick={onBtnWorksE}>
                            <img className='we-img' src={require('./../../images/electronic.webp')} alt='electronic'/>
                            <p>{selectLan ? 'ELECTRONICS' : 'ELECTRÓNICA'}</p>
                        </div>
                    </div>
                    <footer>
                        <p>{selectLan ? 'Developed by ' : 'Desarrollado por '}<span>Andres Montoya Angulo</span></p>
                    </footer>
                </section>
            </main>
        </div>
    );
}

export default withRouter( Works );
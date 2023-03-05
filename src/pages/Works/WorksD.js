import React from 'react';
import { withRouter } from 'react-router-dom';
import './Works.css';
import Left2 from '../../components/Left/Left2';
import Diagram from './Diagram';
import Pokedex from './Pokedex';
import Shopping from './Shopping';
import Music from './Music';
import Music2 from './Music2';


function Works_D( props ) {
    const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

    const scrollToBack = () => {
        props.history.push("/projects");
        testRef1.current.scrollIntoView( {block: "start"} );
    }; 

    const scrollSelect = ( select ) => {
        onSelectLeft( select );
    };

    return (
        <div className="WorksD">
            <title>{selectLan ? 'Development Works | PORTFOLIO' : 'Trabajos de Desarrollo | PORTAFOLIO'}</title>
            <Left2 onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
            <section className='section1' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
                <img src={require('./../../images/developer.png')} alt='developer'/>
                <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
                <h2>{selectLan ? 'Shopping cart' : 'Carro de compras'}</h2>
                <Shopping selectLan={selectLan}/>
            </section>

            <section className='section2' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
                <h2>{selectLan ? 'Pokedex' : 'Pokedex'}</h2>
                <Pokedex selectLan={selectLan}/>
            </section>

            <section className='section3' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>
                <h2>{selectLan ? 'My first canvas' : 'Mi primer lienzo'}</h2>
                <Diagram selectLan={selectLan}/>
            </section>

            <section className='section4' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
                <h2>{selectLan ? 'Music Player' : 'Reproductor de Música'}</h2>
                <Music2 selectLan={selectLan}/>
                <footer>
                    <p>{selectLan ? 'Developed by ' : 'Desarrollado por '}<span>Andres Montoya Angulo</span></p>
                </footer>
            </section>
        </div>
    );
}

export default withRouter( Works_D );
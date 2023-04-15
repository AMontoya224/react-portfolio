import React from 'react';
import { withRouter } from 'react-router-dom';
import './Works.css';
import Left2 from '../../components/Left/Left2';
import Diagram from './Diagram';
import Pokedex from './Pokedex';
import Shopping from './Shopping';
import Music from './Music';


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
                <Shopping selectLan={selectLan} scrollToBack={scrollToBack}/>
            </section>

            <section className='section2' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
                <img src={require('./../../images/title_pokedex.png')} alt='pokedex'/>
                <Pokedex selectLan={selectLan}/>
            </section>

            <section className='section3' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>
                <h1>{selectLan ? 'My First Canvas' : 'Mi Primer Lienzo'}</h1>
                <Diagram selectLan={selectLan}/>
            </section>

            <section className='section4' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
                <Music selectLan={selectLan}/>
            </section>
        </div>
    );
}

export default withRouter( Works_D );
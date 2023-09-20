import React from 'react';
import { withRouter } from 'react-router-dom';
import './WorksD.css';
import Left from '../../components/Left/Left';
import Pokedex from './Pokedex';
import Shopping from './Shopping';
import Music from './Music';
import Projects from './Projects';


function Works_D( props ) {
    const { selectLeft, scrollSelect, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

    const scrollToBack = () => {
        props.history.push("/projects");
        testRef1.current.scrollIntoView( {block: "start"} );
    }; 

    return (
        <div className="WorksD">
            <title>{selectLan ? 'Programming Works | PORTFOLIO' : 'Trabajos de Programación | PORTAFOLIO'}</title>
            <Left onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
            
            <main>
                <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
                    <Projects scrollToBack={scrollToBack} selectLan={selectLan}/>
                </section>

                <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
                    <Shopping selectLan={selectLan}/>
                </section>

                <section className='three' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>
                    <img src={require('./../../images/title_pokedex.webp')} alt='pokedex'/>
                    <Pokedex selectLan={selectLan}/>
                </section>

                <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
                    <Music selectLan={selectLan}/>
                </section>
            </main>
        </div>
    );
}

export default withRouter( Works_D );
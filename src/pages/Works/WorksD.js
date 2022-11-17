import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Left2 from '../../components/Left/Left2';
import './Works.css';
import developer from './../../images/developer-r.png';
import pokedex from '../../images/pokedex.jpg';


function Works_D( props ) {
    const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;
    const [btnOn, setBtnOn] = useState(false);
    const [pokemonInput, setPokemonInput] = useState("");
    const [pokemonId, setPokemonId] = useState(0);
    const [pokemonSend, setPokemonSend] = useState("");
    const [wrong, setWrong] = useState(false);
    const [well, setWell] = useState(false);
    const [load, setLoad] = useState(false);
    const [result, setResult] = useState("");

    const scrollToBack = () => {
        props.history.push("/projects");
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    const onBtnOn = () => {
        if(!btnOn){
            setBtnOn(true);
        }
        else{
            setBtnOn(false);
        }
            setPokemonSend("");
    };

    const onBtnLeft = () => {
        setLoad(true);
        if(pokemonId === 0 || pokemonId === 1 || pokemonId === undefined){
            setPokemonInput(905);
            setPokemonSend(905);
        }
        else{
            setPokemonInput(pokemonId-1);
            setPokemonSend(pokemonId-1);
        }
    };

    const onBtnRight = () => {
        setLoad(true);
        if(pokemonId === 0 || pokemonId === 905 || pokemonId === undefined){
            setPokemonInput(1);
            setPokemonSend(1);
        }
        else{
            setPokemonInput(pokemonId+1);
            setPokemonSend(pokemonId+1);
        }
    };

    const onBtnCenter = () => {
        setLoad(true);
        setPokemonInput(1);
        setPokemonSend(1);
    };

    const handlePokemon = e => {
        setPokemonInput(e.target.value);
    };

    const onSubmitHandle = e => {
        e.preventDefault();
        setLoad(true);
        setPokemonSend(pokemonInput);
    };

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSend}`)
            .then( response => {
                setResult(response.data);
                setPokemonId(response.data.id);
                setWell(true);
                setWrong(false);
                setLoad(false)
            })
            .catch( err => {
                setWell(false);
                setWrong(true);
                setLoad(false)
            })
    }, [pokemonSend]); 

    const scrollSelect = ( select ) => {
        onSelectLeft( select );
    };

    return (
        <div className="WorksD">
            <title>{selectLan ? 'Development Works | PORTFOLIO' : 'Trabajos de Desarrollo | PORTAFOLIO'}</title>
            <Left2 onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
            <div className='section1' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
                <img src={developer} alt='developer'/>
                <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
                <h2>{selectLan ? 'Full development' : 'Desarrollo completo'}</h2>
                <div className='WS-container'>
                    <div>
                        <a href="https://github.com/AMontoya224/BookClub" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Book club' : 'club de libros'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/spring.svg').default} title="Spring Boot" alt='spring'/>
                                <img src={require('./../../images/iconduck/java-original.svg').default} title="Java" alt='java'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/file-type-html.svg').default} title="HTML" alt='html'/>
                                <img src={require('./../../images/iconduck/file-type-css.svg').default} title="CSS" alt='css'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/ProjectManagerJava" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Project manager' : 'Gerente de proyecto'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/spring.svg').default} title="Spring Boot" alt='spring'/>
                                <img src={require('./../../images/iconduck/java-original.svg').default} title="Java" alt='java'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/file-type-html.svg').default} title="HTML" alt='html'/>
                                <img src={require('./../../images/iconduck/file-type-css.svg').default} title="CSS" alt='css'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='section1' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
                <h2>{selectLan ? 'Frontend development' : 'Desarrollo front-end'}</h2>
                {/*Correguir pokedex que ocupa mas espacio del que deberia y provoca que Left2 falle*/}
                <main>
                    <img className="pokedex" src={pokedex} alt='pokedex'/>
                    <div className='ind-voce'>
                        <div></div>
                    </div>
                    <div className={!btnOn ? 'pnt-image' : load ? 'pnt-image load' : 'pnt-image active'}>{btnOn && !load && well && pokemonSend !== "" ? <img style={{maxWidth: "21rem", height: "13rem", marginTop: "1rem"}} src={result.sprites.other.dream_world.front_default} alt="pokemon"/> : <></>}</div>
                    <div className={!btnOn ? 'pnt-data' : load ? 'pnt-data load' : 'pnt-data active'}>{btnOn && !load && well && pokemonSend !== "" ? <div><div><b>TIPO:</b> {result.types[0].type.name}{result.types.length >= 2 ? ", " + result.types[1].type.name : ""}</div><div><b>HEIGHT:</b> {result.height} cm</div><div><b>WEIGHT:</b> {result.weight} kg</div><div><b>BASE EXPERIENCE:</b> {result.base_experience}</div><div><b>MOVES:</b> {result.moves.length === 0 ? "" : result.moves[0].move.name}</div></div> : <></>}</div>
                    <div className={btnOn ? 'pnt-name active' : 'pnt-name'} style={{textOverflow: "Ellipsis", overflow: "hidden"}}>{btnOn && !load && well && pokemonSend !== "" ? result.name.toUpperCase() : " "}</div>
                    <button className={btnOn ? 'btn-on active' : 'btn-on'} onClick={onBtnOn}>
                        <span className="material-icons-round">power_settings_new</span>
                    </button>
                    <button className={btnOn ? 'btn-play active' : 'btn-play'}>
                        <span className="material-icons-round">play_arrow</span>
                    </button>
                    <button className={btnOn ? 'btn-pause active' : 'btn-pause'}>
                        <span className="material-icons-round">pause</span>
                    </button>
                    <button className={btnOn ? 'btn-left active' : 'btn-left'} onClick={onBtnLeft}>
                        <span className="material-icons-sharp">arrow_left</span>
                    </button>
                    <button className={btnOn ? 'btn-right active' : 'btn-right'} onClick={onBtnRight}>
                        <span className="material-icons-sharp">arrow_right</span>
                    </button>
                    <button className={btnOn ? 'btn-up active' : 'btn-up'}>
                        <span className="material-icons-sharp">arrow_drop_up</span>
                    </button>
                    <button className={btnOn ? 'btn-down active' : 'btn-down'}>
                        <span className="material-icons-sharp">arrow_drop_down</span>
                    </button>
                    <div className={btnOn ? 'btn-center active' : 'btn-center'} onClick={onBtnCenter}>
                        <span className="material-icons-round">radio_button_checked</span>
                    </div>
                    <div className={wrong ? 'ind-wrong active' : 'ind-wrong'}></div>
                    <div className={well && pokemonSend !== "" ? 'ind-well active' : 'ind-well'}></div>
                    <form onSubmit={onSubmitHandle}>
                        <input type="text" className={btnOn ? "active" : ""} placeholder={btnOn ? "¿Quién es ese pokemon?" : ""} value={pokemonInput} onChange={handlePokemon}/>
                        <button type='submit'>
                            <span className="material-symbols-rounded">send</span>
                        </button>
                    </form>
                    <div className={btnOn ? 'pnt-stats active' : 'pnt-stats'}>
                        <div><b>HP</b></div>
                        <div><b>ATK</b></div>
                        <div><b>DEF</b></div>
                        <div><b>S-A</b></div>
                        <div><b>S-D</b></div>
                        <div><b>SPD</b></div>
                        <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[0].base_stat : " "}</div>
                        <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[1].base_stat : " "}</div>
                        <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[2].base_stat : " "}</div>
                        <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[3].base_stat : " "}</div>
                        <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[4].base_stat : " "}</div>
                        <div>{btnOn && !load && well && pokemonSend !== "" ? result.stats[5].base_stat : " "}</div>
                    </div>
                </main>
                <div className='WS-container'>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='section1' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>
                <h2>{selectLan ? 'Backend development' : 'Desarrollo de back-end'}</h2>
                <div className='WS-container'>
                    <div>
                        <a href="https://github.com/AMontoya224/ContadorJava" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Visitor counter' : 'Contador de visitas'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/spring.svg').default} title="Spring Boot" alt='spring'/>
                                <img src={require('./../../images/iconduck/java-original.svg').default} title="Java" alt='java'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/file-type-html.svg').default} title="HTML" alt='html'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/DojoOverflow" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Dojo Overflow' : 'Desbordamiento del Dojo'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/spring.svg').default} title="Spring Boot" alt='spring'/>
                                <img src={require('./../../images/iconduck/java-original.svg').default} title="Java" alt='java'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/file-type-html.svg').default} title="HTML" alt='html'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='section1' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
                <h2>{selectLan ? 'Algorithms' : 'Algoritmos'}</h2>
                <div className='WS-container'>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/AMontoya224/libros_MySQL" target="_blank" rel="noreferrer">
                            <p>{selectLan ? 'Sort numbers' : 'Ordenar números'}</p>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                <img src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                <img src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                            </div>
                        </a>
                    </div>
                </div>
                <footer>
                    <p>{selectLan ? 'Developed by ' : 'Desarrollado por '}<span>Andres Montoya Angulo</span></p>
                </footer>
            </div>
        </div>
    );
}

export default withRouter( Works_D );
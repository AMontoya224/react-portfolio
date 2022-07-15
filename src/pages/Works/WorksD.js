import React from 'react';
import { withRouter } from 'react-router-dom';
import Left2 from '../../components/Left/Left2';
import './Works.css';
import developer from './../../images/developer-r.png';


function Works_D( props ) {
    const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

    const scrollToBack = () => {
        props.history.push("/projects");
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    return (
        <div className="WorksD">
            <div className='section1'ref={testRef1}>
                <img src={developer} alt='developer'/>
                <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
                <Left2 onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
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
            <div className='section1' ref={testRef2}>
                <h2>{selectLan ? 'Frontend development' : 'Desarrollo front-end'}</h2>
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
            <div className='section1' ref={testRef3}>
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
            <div className='section1' ref={testRef4}>
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
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './AboutMe.css';
import Left2 from './../../components/Left/Left2';
import rojo from './../../images/rojo-r.jpg';
import foto from './../../images/ejercito-r.jpg';
import javascript from './../../images/iconduck/javascript.jpg';
import express from './../../images/iconduck/express.png';
import ajax from './../../images/iconduck/ajax.jpg';
import proteus from './../../images/iconduck/proteus.png';
import microchip from './../../images/iconduck/motorola-Logo.png';
import xilinx from './../../images/iconduck/xilinx.png';
import coding from './../../images/coding-r.png';
import cayetano from './../../images/cayetano-r.png';
import unsa from './../../images/unsa-r.png';


function AboutMe( props ) {
    const { onSelectLeft, selectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;
    const [levelD, setLevelD] = useState( false );
    const [levelG, setLevelG] = useState( false );
    const [levelS, setLevelS] = useState( false );
    const [levelB, setLevelB] = useState( false );

    const scrollToBack = () => {
        onSelectLeft( '#3' );
        props.history.push("/");
        testRef3.current.scrollIntoView( {block: "start"} );
    };

    const selectLevelD = () => {
        if(!levelD){
            setLevelD( true );
        }
        else{
            setLevelD( false );
        }
    };

    const selectLevelG = () => {
        if(!levelG){
            setLevelG( true );
        }
        else{
            setLevelG( false );
        }
    };

    const selectLevelS = () => {
        if(!levelS){
            setLevelS( true );
        }
        else{
            setLevelS( false );
        }
    };

    const selectLevelB = () => {
        if(!levelB){
            setLevelB( true );
        }
        else{
            setLevelB( false );
        }
    };

    return (
        <div className="AboutMe">
            <div className='section1' ref={testRef1}>
                <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
                <Left2 onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
                <p className='H-title'>{selectLan ? 'About me' : 'Sobre mí'}</p>
                <button className='H-sub' onClick={scrollToBack}>
                    <div className='s1'></div>
                        {selectLan ? 'RETURN' : 'REGRESAR'}
                    <div className='s2'></div>
                </button>
                <p className='H-main'>{selectLan ? 'I love design, technology,' : 'Me encanta el diseño, la tecnología'}</p>
                <p className='H-main'>{selectLan ? 'and creativity' : 'y la creatividad'}</p>
                <img className='A-img' src={rojo} alt='foto'/>
            </div>
            <div className='section2'ref={testRef2}>
                <h2>{selectLan ? 'Who I am' : 'Quién soy'}</h2>
                <div className='w-container'>
                    <div>
                        <img className='w-img' src={foto} alt='foto'/>
                        <div className='w-info'>
                            <h3>Andres Montoya Angulo</h3>
                            <i>{selectLan ? '"Learning should not stop"' : '"El aprendizaje no debe detenerse"'}</i>
                        </div>
                    </div>
                    <div className='w-message'>
                        <p><b>{selectLan ? 'Hello!' : '¡Hola!'}</b>{selectLan ? ' I was born in Arequipa in 1998. After graduating as an ' : ' Nací en Arequipa en 1998. Luego de graduarme como '}
                        <b>{selectLan ? 'electronic engineer ' : 'ingeniero electrónico '}</b>{selectLan ? 'and after being in charge of some ' : 'y después de estar a cargo de algunos '}<b>{selectLan ? 'research projects' : 'proyectos de investigación'}</b>, 
                        {selectLan ? ' i decided to study and become a ' : ' decidí estudiar y convertirme en '}<b>{selectLan ? 'full stack developer' : 'desarrollador full stack'}</b>.</p>
                        <p>{selectLan ? "I haven't regretted that decision and can't wait to learn more!" : '¡No me he arrepentido de esa decisión y no puedo esperar para aprender más!'}</p>
                    </div>
                </div>
            </div>
            <div className='section3' ref={testRef3}>
                <h2>{selectLan ? 'Skill set' : 'Conjunto de habilidades'}</h2>
                <div className='row'>
                    <div className='container'>
                        <h3>{selectLan ? 'SOFTWARE DEVELOPMENT' : 'DESARROLLO DE SOFTWARE'}</h3>
                        <div>
                            <div>
                                <p>{selectLan ? 'Languages' : 'Lenguajes'}</p>
                                <div>
                                    <img className={levelG ? 'SL-img gold active' : 'SL-img gold'} src={javascript} title="JavaScript" alt='javascript'/>
                                    <img className={levelG ? 'SL-img gold active' : 'SL-img gold'} src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                    <img className={levelB ? 'SL-img bronze active' : 'SL-img bronze'} src={require('./../../images/iconduck/java-original.svg').default} title="Java" alt='java'/>
                                    <img className={levelD ? 'SL-img diamond active' : 'SL-img diamond'} src={require('./../../images/iconduck/file-type-html.svg').default} title="HTML" alt='html'/>
                                    <img className={levelD ? 'SL-img diamond active' : 'SL-img diamond'} src={require('./../../images/iconduck/file-type-css.svg').default} title="CSS" alt='css'/>
                                    <img className={levelS ? 'SL-img silver active' : 'SL-img silver'} src={require('./../../images/iconduck/file-type-sql.svg').default} title="SQL" alt='sql'/>
                                </div>
                            </div>
                            <div>
                                <p>{selectLan ? 'Frameworks' : 'Frameworks'}</p>
                                <div>
                                    <img className={levelD ? 'SF-img diamond active' : 'SF-img diamond'} src={require('./../../images/iconduck/react.svg').default} title="React" alt='react'/>
                                    <img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={express} title="Express" alt='express'/>
                                    <img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/file-type-django.svg').default} title="Django" alt='django'/>
                                    <img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/icons8-flask.svg').default} title="Flask" alt='flask'/>
                                    <img className={levelB ? 'SF-img bronze active' : 'SF-img bronze'} src={require('./../../images/iconduck/spring.svg').default} title="Spring Boot" alt='spring'/>
                                    <img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/jquery-plain.svg').default} title="jQuery" alt='jquery'/>
                                    <img className={levelG ? 'SF-img gold active' : 'SF-img gold'} src={ajax} title="AJAX" alt='ajax'/>
                                    <img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/socket-io.svg').default} title="Socket.io" alt='socket'/>
                                    <img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/bootstrap.svg').default} title="Bootstrap" alt='bootstrap'/>
                                    <img className={levelB ? 'SF-img bronze active' : 'SF-img bronze'} src={require('./../../images/iconduck/foundation.svg').default} title="Foundation" alt='foundation'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div>
                                    <p>{selectLan ? 'Database' : 'Base de datos'}</p>
                                    <div>
                                        <img className={levelG ? 'SD-img gold active' : 'SD-img gold'} src={require('./../../images/iconduck/mongodb-original.svg').default} title="MongoDB" alt='mongodb'/>
                                        <img className={levelG ? 'SD-img gold active' : 'SD-img gold'} src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} title="MySQL" alt='mysql'/>
                                        <img className={levelB ? 'SD-img bronze active' : 'SD-img bronze'} src={require('./../../images/iconduck/file-type-sqlite.svg').default} title="SQLite" alt='sqlite'/>
                                    </div>
                                </div>
                                <div>
                                    <p>{selectLan ? 'Software' : 'Programas'}</p>
                                    <div>
                                        <img className={levelS ? 'SS-img silver active' : 'SS-img silver'} src={require('./../../images/iconduck/github.svg').default} title="GitHub" alt='github'/>
                                        <img className={levelS ? 'SS-img silver active' : 'SS-img silver'} src={require('./../../images/iconduck/postman.svg').default} title="Postman" alt='postman'/>
                                        <img className={levelG ? 'SS-img gold active' : 'SS-img gold'} src={require('./../../images/iconduck/git.svg').default} title="GitBash" alt='gitbash'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='leyenda'>
                        <div className='leyenda-d' onClick={selectLevelD} title={selectLan ? 'Expert' : 'Experto'}></div>
                        <div className='leyenda-g' onClick={selectLevelG} title={selectLan ? 'Advanced' : 'Avanzado'}></div>
                        <div className='leyenda-s' onClick={selectLevelS} title={selectLan ? 'Intermediate' : 'Intermedio'}></div>
                        <div className='leyenda-b' onClick={selectLevelB} title={selectLan ? 'Essential' : 'Basico'}></div>
                    </div>
                    <div className='container'>
                        <h3>{selectLan ? 'ELECTRONIC ENGINEERING' : 'INGENIERÍA ELECTRÓNICA'}</h3>
                        <div>
                            <div>
                                <p>{selectLan ? 'Languages' : 'Lenguajes'}</p>
                                <div>
                                    <img className={levelS ? 'EL-img silver active' : 'EL-img silver'} src={require('./../../images/iconduck/c-original.svg').default} title="C" alt='c'/>
                                    <img className={levelS ? 'EL-img silver active' : 'EL-img silver'} src={require('./../../images/iconduck/c-plusplus.svg').default} title="C++" alt='c++'/>
                                    <img className={levelB ? 'EL-img bronze active' : 'EL-img bronze'} src={require('./../../images/iconduck/c-sharp.svg').default} title="C#" alt='c#'/>
                                    <img className={levelD ? 'EL-img diamond active' : 'EL-img diamond'} src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                    <img className={levelD ? 'EL-img diamond active' : 'EL-img diamond'} src={require('./../../images/iconduck/matlab.svg').default} title="MatLab" alt='matlab'/>
                                    <img className={levelS ? 'EL-img silver active' : 'EL-img silver'} src={require('./../../images/iconduck/file-type-vhdl.svg').default} title="VHDL" alt='vhdl'/>
                                    <img className={levelB ? 'EL-img bronze active' : 'EL-img bronze'} src={require('./../../images/iconduck/file-type-assembly.svg').default} title="Assembler" alt='assembler'/>
                                    <img className={levelG ? 'EL-img gold active' : 'EL-img gold'} src={require('./../../images/iconduck/icons8-texshop.svg').default} title="LaTeX" alt='latex'/>
                                </div>
                            </div>
                            <div>
                                <p>{selectLan ? 'Software' : 'Programas'}</p>
                                <div>
                                    <img className={levelD ? 'ES-img diamond active' : 'ES-img diamond'} src={require('./../../images/iconduck/solidworks.svg').default} title="SolidWorks" alt='solidworks'/>
                                    <img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/icons8-3ds-max.svg').default} title="3Ds Max" alt='3dsmax'/>
                                    <img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/icons8-autocad.svg').default} title="AutoCAD" alt='autocad'/>
                                    <img className={levelD ? 'ES-img diamond active' : 'ES-img diamond'} src={require('./../../images/iconduck/eagle.svg').default} title="Eagle" alt='eagle'/>
                                    <img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={proteus} title="Proteus" alt='proteus'/>
                                    <img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/qtproject-designer.svg').default} title="QtDesigner" alt='qtdesigner'/>
                                    <img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/raspberry-pi.svg').default} title="Raspberry Pi" alt='raspberry'/>
                                    <img className={levelG ? 'ES-img gold active' : 'ES-img gold'} src={microchip} title="Microchip" alt='microchip'/>
                                    <img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/arduino.svg').default} title="Arduino" alt='arduino'/>
                                    <img className={levelB ? 'ES-img bronze active' : 'ES-img bronze'} src={xilinx} title="Xilinx" alt='xilinx'/>
                                    <img className={levelG ? 'ES-img gold active' : 'ES-img gold'} src={require('./../../images/iconduck/visual-studio-code.svg').default} title="VS Code" alt='vscode'/>
                                    <img className={levelB ? 'ES-img bronze active' : 'ES-img bronze'} src={require('./../../images/iconduck/icons8-davinci-resolver.svg').default} title="DaVinci" alt='davinci'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section4'ref={testRef4}>
                <h2>{selectLan ? 'Education' : 'Educación'}</h2>
                <div>
                    <div className='E-container'>
                        <a href="https://drive.google.com/file/d/1IU2z8yiL5XjO0Qd-C2vgPLC34z3cAFw4/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img className='E-logo' src={coding} alt='coding'/>
                            <div className='E-info'>
                                <h3>{selectLan ? 'Coding Dojo academy' : 'Academia Coding Dojo'}</h3>
                                <h4>{selectLan ? 'Full stack developer' : 'Desarrollador full stack'}</h4>
                                <i>{selectLan ? 'January 2022 - April 2022' : 'Enero 2022 - Abril 2022'}</i>
                                <ul>
                                    <li>{selectLan ? 'Web fundamentals' : 'Fundamentos de la web'}</li>
                                    <li>{selectLan ? 'Python - Red belt' : 'Python - Cinturón rojo'}</li>
                                    <li>{selectLan ? 'Java - Black belt' : 'Java - Cinturón negro'}</li>
                                    <li>{selectLan ? 'MERN - Black belt' : 'MERN - Cinturón negro'}</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className='E-container E-container-C'>
                        <a href="https://drive.google.com/file/d/1KWhjxaZMYPExmHJureVZ1XCuRgTMglf1/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img className='E-logo-C' src={cayetano} alt='cayetano'/>
                            <div className='E-info'>
                                <h3>Universidad Peruana Cayetano Heredia</h3>
                                <h4>{selectLan ? 'Writing of Scientific Articles' : 'Redacción de Artículos Científicos'}</h4>
                                <i>{selectLan ? 'November 2020 - December 2020' : 'Noviembre 2020 - Diciembre 2020'}</i>
                                <ul>
                                    <li>{selectLan ? 'Materials and Methods' : 'Materiales y métodos'}</li>
                                    <li>{selectLan ? 'Results and Discussion' : 'Resultados y discusión'}</li>
                                    <li>{selectLan ? 'Introduction and Summary' : 'Introducción y Resumen'}</li>
                                    <li>{selectLan ? 'References management' : 'Manejo de referencias'}</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className='E-container'>
                        <a href="https://drive.google.com/file/d/1k4mr1NSpC291MTu7i23XSuOWoPsKJidG/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img className='E-logo' src={unsa} alt='unsa'/>
                            <div className='E-info'>
                                <h3>Universidad Nacional de San Agustin</h3>
                                <h4>{selectLan ? 'Electronic Engineering' : 'Ingeniería Electrónica'}</h4>
                                <i>{selectLan ? 'March 2015 - August 2020' : 'Marzo 2015 - Agosto 2020'}</i>
                                <ul>
                                    <li>{selectLan ? 'Upper fifth' : 'Quinto superior'}</li>
                                    <li>{selectLan ? 'Junior researcher' : 'Investigador junior'}</li>
                                    <li>{selectLan ? 'Member of IEEE RAS' : 'Miembro de IEEE RAS'}</li>
                                    <li>{selectLan ? 'Member of ASME' : 'Miembro de ASME'}</li>
                                </ul>
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

export default withRouter( AboutMe );
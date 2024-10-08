import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './AboutMe.css';
import Left from './../../components/Left/Left';


function AboutMe( props ) {
    const { onSelectLeft, scrollSelect, selectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;
    const [levelD, setLevelD] = useState( true );
    const [levelG, setLevelG] = useState( false );
    const [levelS, setLevelS] = useState( false );
    const [levelB, setLevelB] = useState( false );

    const toBack = () => {
        props.history.push('/');
        setTimeout( () => {
            onSelectLeft('#3');
            testRef3.current.scrollIntoView({block: 'start'})
        }, 0);
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
            <title>{selectLan ? 'About Me | PORTFOLIO' : 'Sobre Mi | PORTAFOLIO'}</title>
            <Left onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
            
            <main>
                <section className='one' ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
                    <button onClick={toBack} className='B-return'><span className="material-icons-round">keyboard_backspace</span><p>BACK</p></button>
                    <h2 className='H-title'>{selectLan ? 'About me' : 'Sobre mí'}</h2>
                    <button className='H-sub' onClick={toBack}>
                        <div className='s1'></div>
                            {selectLan ? 'RETURN' : 'REGRESAR'}
                        <div className='s2'></div>
                    </button>
                    <p className='H-main'>{selectLan ? 'I love design, technology and creativity. I strive to keep learning every day.' : 'Me encanta el diseño, la tecnología y  la creatividad. Me esfuerzo por seguir aprendiendo cada día.'}</p>
                    <img className='A-img' src={require('./../../images/perfil2.webp')} alt='perfil'/>
                </section>

                <section className='two' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
                    <h3>{selectLan ? 'Who I am' : 'Quién soy'}</h3>
                    <div className='w-container'>
                        <div>
                            <img className='w-img' src={require('./../../images/ejercito.webp')} alt='ejercito'/>
                            <div className='w-info'>
                                <h4>Andres Montoya Angulo</h4>
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
                </section>

                <section className='three' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>
                    <h3>{selectLan ? 'Skill set' : 'Conjunto de habilidades'}</h3>
                    <div className='row'>
                        <div className='container'>
                            <h4>{selectLan ? 'SOFTWARE DEVELOPMENT' : 'DESARROLLO DE SOFTWARE'}</h4>
                            <div>
                                <div>
                                    <p>{selectLan ? 'Languages' : 'Lenguajes'}</p>
                                    <div>
                                        <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer"><img className={levelD ? 'SL-img diamond active' : 'SL-img diamond'} src={require('./../../images/iconduck/html.svg').default} title="HTML" alt='html'/></a>
                                        <a href="https://www.w3schools.com/w3css/defaulT.asp" target="_blank" rel="noreferrer"><img className={levelD ? 'SL-img diamond active' : 'SL-img diamond'} src={require('./../../images/iconduck/css.svg').default} title="CSS" alt='css'/></a>
                                        <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><img className={levelG ? 'SL-img gold active' : 'SL-img gold'} src={require('./../../images/iconduck/javascript.jpg')} title="JavaScript" alt='javascript'/></a>
                                        <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img className={levelG ? 'SL-img gold active' : 'SL-img gold'} src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/></a>
                                        <a href="https://www.w3schools.com/sql/" target="_blank" rel="noreferrer"><img className={levelS ? 'SL-img silver active' : 'SL-img silver'} src={require('./../../images/iconduck/sql.svg').default} title="SQL" alt='sql'/></a>
                                        <a href="https://www.java.com/es/" target="_blank" rel="noreferrer"><img className={levelB ? 'SL-img bronze active' : 'SL-img bronze'} src={require('./../../images/iconduck/java.svg').default} title="Java" alt='java'/></a>
                                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img className={levelB ? 'SL-img bronze active' : 'SL-img bronze'} src={require('./../../images/iconduck/typescript.svg').default} title="TypeScript" alt='typescript'/></a>
                                    </div>
                                </div>
                                <div>
                                    <p>{selectLan ? 'Frameworks' : 'Frameworks'}</p>
                                    <div>
                                        <a href="https://es.reactjs.org/" target="_blank" rel="noreferrer"><img className={levelD ? 'SF-img diamond active' : 'SF-img diamond'} src={require('./../../images/iconduck/react.svg').default} title="React" alt='react'/></a>
                                        <a href="https://www.w3schools.com/js/js_ajax_intro.asp" target="_blank" rel="noreferrer"><img className={levelG ? 'SF-img gold active' : 'SF-img gold'} src={require('./../../images/iconduck/ajax.jpg')} title="AJAX" alt='ajax'/></a>
                                        <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/express.png')} title="Express" alt='express'/></a>
                                        <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/django.svg').default} title="Django" alt='django'/></a>
                                        <a href="https://flask.palletsprojects.com/en/2.2.x/" target="_blank" rel="noreferrer"><img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/flask.svg').default} title="Flask" alt='flask'/></a>
                                        <a href="https://nextjs.org/" target="_blank" rel="noreferrer"><img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/next.png')} title="Next.js" alt='next'/></a>
                                        <a href="https://jquery.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/jquery.svg').default} title="jQuery" alt='jquery'/></a>
                                        <a href="https://socket.io/" target="_blank" rel="noreferrer"><img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/socket.svg').default} title="Socket.io" alt='socket'/></a>
                                        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/bootstrap.svg').default} title="Bootstrap" alt='bootstrap'/></a>
                                        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'SF-img silver active' : 'SF-img silver'} src={require('./../../images/iconduck/tailwind.png')} title="Tailwind" alt='tailwind'/></a>
                                        <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer"><img className={levelB ? 'SF-img bronze active' : 'SF-img bronze'} src={require('./../../images/iconduck/spring.svg').default} title="Spring Boot" alt='spring'/></a>
                                        <a href="https://get.foundation/" target="_blank" rel="noreferrer"><img className={levelB ? 'SF-img bronze active' : 'SF-img bronze'} src={require('./../../images/iconduck/foundation.svg').default} title="Foundation" alt='foundation'/></a>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div>
                                        <p>{selectLan ? 'Database' : 'Base de datos'}</p>
                                        <div>
                                            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img className={levelG ? 'SD-img gold active' : 'SD-img gold'} src={require('./../../images/iconduck/mongodb.svg').default} title="MongoDB" alt='mongodb'/></a>
                                            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img className={levelG ? 'SD-img gold active' : 'SD-img gold'} src={require('./../../images/iconduck/mysql.svg').default} title="MySQL" alt='mysql'/></a>
                                            <a href="https://www.sqlite.org/index.html" target="_blank" rel="noreferrer"><img className={levelB ? 'SD-img bronze active' : 'SD-img bronze'} src={require('./../../images/iconduck/sqlite.svg').default} title="SQLite" alt='sqlite'/></a>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{selectLan ? 'Software' : 'Programas'}</p>
                                        <div>
                                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img className={levelG ? 'SS-img gold active' : 'SS-img gold'} src={require('./../../images/iconduck/git.svg').default} title="GitBash" alt='gitbash'/></a>
                                            <a href="https://github.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'SS-img silver active' : 'SS-img silver'} src={require('./../../images/iconduck/github.svg').default} title="GitHub" alt='github'/></a>
                                            <a href="https://www.postman.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'SS-img silver active' : 'SS-img silver'} src={require('./../../images/iconduck/postman.svg').default} title="Postman" alt='postman'/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='leyenda'>
                            <div className={levelD ? 'leyenda-d active' : 'leyenda-d'} onClick={selectLevelD} title={selectLan ? 'Expert' : 'Experto'}><p>{selectLan ? 'EXPERT' : 'EXPERTO'}</p></div>
                            <div className={levelG ? 'leyenda-g active' : 'leyenda-g'} onClick={selectLevelG} title={selectLan ? 'Advanced' : 'Avanzado'}><p>{selectLan ? 'AVANCED' : 'AVANZADO'}</p></div>
                            <div className={levelS ? 'leyenda-s active' : 'leyenda-s'} onClick={selectLevelS} title={selectLan ? 'Intermediate' : 'Intermedio'}><p>{selectLan ? 'INTERMEDIATE' : 'INTERMEDIO'}</p></div>
                            <div className={levelB ? 'leyenda-b active' : 'leyenda-b'} onClick={selectLevelB} title={selectLan ? 'Essential' : 'Basico'}><p>{selectLan ? 'ESSENTIAL' : 'BÁSICO'}</p></div>
                        </div>
                        <div className='container'>
                            <h4>{selectLan ? 'ELECTRONIC ENGINEERING' : 'INGENIERÍA ELECTRÓNICA'}</h4>
                            <div>
                                <div>
                                    <p>{selectLan ? 'Languages' : 'Lenguajes'}</p>
                                    <div>
                                        <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img className={levelD ? 'EL-img diamond active' : 'EL-img diamond'} src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/></a>
                                        <a href="https://la.mathworks.com/products/matlab.html" target="_blank" rel="noreferrer"><img className={levelD ? 'EL-img diamond active' : 'EL-img diamond'} src={require('./../../images/iconduck/matlab.svg').default} title="MatLab" alt='matlab'/></a>
                                        <a href="https://es.overleaf.com/" target="_blank" rel="noreferrer"><img className={levelG ? 'EL-img gold active' : 'EL-img gold'} src={require('./../../images/iconduck/latex.svg').default} title="LaTeX" alt='latex'/></a>
                                        <a href="https://www.w3schools.com/c/c_intro.php" target="_blank" rel="noreferrer"><img className={levelS ? 'EL-img silver active' : 'EL-img silver'} src={require('./../../images/iconduck/c.svg').default} title="C" alt='c'/></a>
                                        <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"><img className={levelS ? 'EL-img silver active' : 'EL-img silver'} src={require('./../../images/iconduck/c-plusplus.svg').default} title="C++" alt='c++'/></a>
                                        <a href="https://www.xilinx.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'EL-img silver active' : 'EL-img silver'} src={require('./../../images/iconduck/vhdl.svg').default} title="VHDL" alt='vhdl'/></a>
                                        <a href="https://www.w3schools.com/cs/index.php" target="_blank" rel="noreferrer"><img className={levelB ? 'EL-img bronze active' : 'EL-img bronze'} src={require('./../../images/iconduck/c-sharp.svg').default} title="C#" alt='c#'/></a>
                                        <a href="https://assemblysoftware.com/" target="_blank" rel="noreferrer"><img className={levelB ? 'EL-img bronze active' : 'EL-img bronze'} src={require('./../../images/iconduck/assembly.svg').default} title="Assembly" alt='assembly'/></a>
                                    </div>
                                </div>
                                <div>
                                    <p>{selectLan ? 'Software' : 'Programas'}</p>
                                    <div>
                                        <a href="https://www.solidworks.com/es/" target="_blank" rel="noreferrer"><img className={levelD ? 'ES-img diamond active' : 'ES-img diamond'} src={require('./../../images/iconduck/solidworks.svg').default} title="SolidWorks" alt='solidworks'/></a>
                                        <a href="https://www.autodesk.com/products/eagle/overview?term=1-YEAR&tab=subscription" target="_blank" rel="noreferrer"><img className={levelD ? 'ES-img diamond active' : 'ES-img diamond'} src={require('./../../images/iconduck/eagle.svg').default} title="Eagle" alt='eagle'/></a>
                                        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img className={levelG ? 'ES-img gold active' : 'ES-img gold'} src={require('./../../images/iconduck/visual.svg').default} title="VS Code" alt='vscode'/></a>
                                        <a href="https://www.microchip.com/" target="_blank" rel="noreferrer"><img className={levelG ? 'ES-img gold active' : 'ES-img gold'} src={require('./../../images/iconduck/microchip.png')} title="Microchip" alt='microchip'/></a>
                                        <a href="https://www.autodesk.es/products/3ds-max/overview?term=1-YEAR&tab=subscription" target="_blank" rel="noreferrer"><img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/3ds.svg').default} title="3Ds Max" alt='3dsmax'/></a>
                                        <a href="https://web.autocad.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/autocad.svg').default} title="AutoCAD" alt='autocad'/></a>
                                        <a href="https://www.labcenter.com/" target="_blank" rel="noreferrer"><img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/proteus.png')} title="Proteus" alt='proteus'/></a>
                                        <a href="https://www.qt.io/" target="_blank" rel="noreferrer"><img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/qtproject.svg').default} title="QtDesigner" alt='qtdesigner'/></a>
                                        <a href="https://www.raspberrypi.org/" target="_blank" rel="noreferrer"><img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/raspberry.svg').default} title="Raspberry Pi" alt='raspberry'/></a>
                                        <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"><img className={levelS ? 'ES-img silver active' : 'ES-img silver'} src={require('./../../images/iconduck/arduino.svg').default} title="Arduino" alt='arduino'/></a>
                                        <a href="https://www.xilinx.com/" target="_blank" rel="noreferrer"><img className={levelB ? 'ES-img bronze active' : 'ES-img bronze'} src={require('./../../images/iconduck/xilinx.png')} title="Xilinx" alt='xilinx'/></a>
                                        <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank" rel="noreferrer"><img className={levelB ? 'ES-img bronze active' : 'ES-img bronze'} src={require('./../../images/iconduck/davinci.svg').default} title="DaVinci" alt='davinci'/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='four' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
                    <h3>{selectLan ? 'Education' : 'Educación'}</h3>
                    <div>
                        <div className='E-container'>
                            <a href="https://drive.google.com/file/d/1IU2z8yiL5XjO0Qd-C2vgPLC34z3cAFw4/view?usp=sharing" target="_blank" rel="noreferrer">
                                <img className='E-logo' src={require('./../../images/coding.webp')} alt='coding'/>
                                <div className='E-info'>
                                    <h4>{selectLan ? 'Coding Dojo academy' : 'Academia Coding Dojo'}</h4>
                                    <h5>{selectLan ? 'Full Stack Developer' : 'Desarrollador Full Stack'}</h5>
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
                        <div className='E-container'>
                            <a href="https://drive.google.com/file/d/1KWhjxaZMYPExmHJureVZ1XCuRgTMglf1/view?usp=sharing" target="_blank" rel="noreferrer">
                                <img className='E-logo-C' src={require('./../../images/cayetano.webp')} alt='cayetano'/>
                                <div className='E-info'>
                                    <h4>Universidad Peruana Cayetano Heredia</h4>
                                    <h5>{selectLan ? 'Writing of Scientific Articles' : 'Redacción de Artículos Científicos'}</h5>
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
                                <img className='E-logo' src={require('./../../images/unsa.webp')} alt='unsa'/>
                                <div className='E-info'>
                                    <h4>Universidad Nacional de San Agustin</h4>
                                    <h5>{selectLan ? 'Electronic Engineering' : 'Ingeniería Electrónica'}</h5>
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
                </section>
            </main>
        </div>
    );
}

export default withRouter( AboutMe );
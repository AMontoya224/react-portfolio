import React from 'react';
import { withRouter } from 'react-router-dom';
import Left2 from '../../components/Left/Left2';
import './Works.css';


function Works_E( props ) {
    const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

    const scrollToBack = () => {
        props.history.push("/projects");
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    const scrollSelect = ( select ) => {
        onSelectLeft( select );
    };

    return (
        <div className="WorksE">
            <title>{selectLan ? 'Electronic Works | PORTFOLIO' : 'Trabajos de Electrónica | PORTAFOLIO'}</title>
            <Left2 onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
            <div className='section1'ref={testRef1} onMouseEnter={() => scrollSelect( '#1' )} onTouchStart={() => scrollSelect( '#1' )}>
                <img src={require('./../../images/electronic.png')} alt='electronic'/>
                <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
                <h2>{selectLan ? 'Explosive ordnance disposal robot' : 'Robot de eliminación de explosivos'}</h2>
                <div className='top'>
                    <div>
                        <b>{selectLan ? 'ROLE' : 'CARGO'}</b>
                        <b className='top-d'>{selectLan ? 'DATE' : 'FECHA'}</b>
                        <b className='top-o'>{selectLan ? 'OVERVIEW' : 'VISIÓN GENERAL'}</b>
                    </div>
                    <div>
                        <p>{selectLan ? 'Developer | Electronic engineer' : 'Desarrollador | Ingeniero electrónico'}</p>
                        <p className='top-d'>{selectLan ? 'SEPTEMBER 2020 - MARCH 2022' : 'SEPTIEMBRE 2020 - MARZO 2022'}</p>
                        <p className='top-o'>{selectLan ? 'Development of artificial vision, control of the robotic arm through cameras' : 'Desarrollo de visión artificial, control del brazo robótico a través de cámaras'}</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='container-t'>
                        <img className='img-b-t' src={require('./../../images/robot-1.jpg')} alt='robot'/>
                        <img className='img-b-b' src={require('./../../images/robot-2.jpg')} alt='robot'/>
                    </div>
                    <div className='container-b'>
                        <div>
                            <b>{selectLan ? 'TECHNOLOGIES' : 'TECNOLOGÍAS'}</b>
                            <div>
                                <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/></a>
                                <a href="https://www.qt.io/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/qtproject.svg').default} title="QtDesigner" alt='qtdesigner'/></a>
                                <a href="https://la.mathworks.com/products/matlab.html" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/matlab.svg').default} title="MatLab" alt='matlab'/></a>
                                <a href="https://www.solidworks.com/es/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/solidworks.svg').default} title="SolidWorks" alt='solidworks'/></a>
                                <a href="https://web.autocad.com/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/autocad.svg').default} title="AutoCAD" alt='autocad'/></a>
                                <a href="https://www.autodesk.es/products/3ds-max/overview?term=1-YEAR&tab=subscription" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/3ds.svg').default} title="3Ds Max" alt='3dsmax'/></a>
                                <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/davinci.svg').default} title="DaVinci" alt='davinci'/></a>
                            </div>
                        </div>
                        <div>
                            <b>{selectLan ? 'LINKS' : 'ENLACES'}</b>
                            <div>
                                <a href="http://proyectos-vri.unsa.edu.pe/proyectos_vri/handle/91.103.221022/6126" target="_blank" rel="noreferrer">
                                    <ion-icon name="globe" size="large"></ion-icon>
                                </a>
                                <a href='https://www.unsa.edu.pe/la-unsa-presenta-prototipo-de-robot-que-desactiva-explosivos-utilizando-sensores/' target="_blank" rel="noreferrer">
                                    <ion-icon name="newspaper" size="large"></ion-icon>
                                </a>
                                <a href="https://m.facebook.com/PaginaOficialUNSA/videos/793673831421267/?locale2=ne_NP" target="_blank" rel="noreferrer">
                                    <ion-icon name="logo-facebook" size="large"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section1' ref={testRef2} onMouseEnter={() => scrollSelect( '#2' )} onTouchStart={() => scrollSelect( '#2' )}>
                <h2>{selectLan ? 'Driver drowsiness detection' : 'Detección de somnolencia'}</h2>
                <div className='top'>
                    <div>
                        <b>{selectLan ? 'ROLE' : 'CARGO'}</b>
                        <b className='top-d'>{selectLan ? 'DATE' : 'FECHA'}</b>
                        <b className='top-o'>{selectLan ? 'OVERVIEW' : 'VISIÓN GENERAL'}</b>
                    </div>
                    <div>
                        <p>{selectLan ? 'Electronic engineer | Researcher' : 'Ingeniero electrónico | Investigador'}</p>
                        <p className='top-d'>{selectLan ? 'JANUARY 2020 - SEPTEMBER 2020' : 'ENERO 2020 - SEPTIEMBRE 2020'}</p>
                        <p className='top-o'>{selectLan ? 'Development of a sleepiness detection system for transport drivers' : 'Desarrollo de un sistema de detección de somnolencia para conductores de transporte'}</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='container-t'>
                        <img className='img-b-t' src={require('./../../images/siso-1.jpg')} alt='siso'/>
                        <img className='img-b-b' src={require('./../../images/siso-2.jpg')} alt='siso'/>
                    </div>
                    <div className='container-b'>
                        <div>
                            <b>{selectLan ? 'TECHNOLOGIES' : 'TECNOLOGÍAS'}</b>
                            <div>
                                <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/></a>
                                <a href="https://la.mathworks.com/products/matlab.html" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/matlab.svg').default} title="MatLab" alt='matlab'/></a>
                                <a href="https://www.raspberrypi.org/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/raspberry.svg').default} title="Raspberry Pi" alt='raspberry'/></a>
                                <a href="https://www.w3schools.com/c/c_intro.php" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/c.svg').default} title="C" alt='c'/></a>
                                <a href="https://www.microchip.com/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/microchip.png')} title="Microchip" alt='microchip'/></a>
                                <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/visual.svg').default} title="VS Code" alt='vscode'/></a>
                            </div>
                        </div>
                        <div>
                            <b>{selectLan ? 'LINKS' : 'ENLACES'}</b>
                            <div>
                                <a href="https://www.ulasalle.edu.pe/transparencia/proyecto_5.pdf" target="_blank" rel="noreferrer">
                                    <ion-icon name="globe" size="large"></ion-icon>
                                </a>
                                <a href='https://www.facebook.com/bylogic.tech/photos/a.329987683792871/2947721352019478' target="_blank" rel="noreferrer">
                                    <ion-icon name="logo-facebook" size="large"></ion-icon>
                                </a>
                                <a href="https://www.youtube.com/watch?v=kqQzzbWTs6E" target="_blank" rel="noreferrer">
                                    <ion-icon name="logo-youtube" size="large"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section1' ref={testRef3} onMouseEnter={() => scrollSelect( '#3' )} onTouchStart={() => scrollSelect( '#3' )}>
                <h2>{selectLan ? 'Desing of electrostimulation vest' : 'Chaleco de electroestimulación'}</h2>
                <div className='top'>
                    <div>
                        <b>{selectLan ? 'ROLE' : 'CARGO'}</b>
                        <b className='top-d'>{selectLan ? 'DATE' : 'FECHA'}</b>
                        <b className='top-o'>{selectLan ? 'OVERVIEW' : 'VISIÓN GENERAL'}</b>
                    </div>
                    <div>
                        <p>{selectLan ? 'Electronic engineer' : 'Ingeniero electronico'}</p>
                        <p className='top-d'>{selectLan ? 'OCTOBER 2018 - JANUARY 2020' : 'OCTUBRE 2018 - ENERO 2020'}</p>
                        <p className='top-o'>{selectLan ? 'Research and programming of the Kotz electric wave output station' : 'Investigación y programación de la estación de salida de ondas eléctricas Kotz'}</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='container-t'>
                        <img className='img-b-t' src={require('./../../images/vest-1.jpg')} alt='vest'/>
                        <img className='img-b-b' src={require('./../../images/vest-2.jpg')} alt='vest'/>
                    </div>
                    <div className='container-b'>
                        <div>
                            <b>{selectLan ? 'TECHNOLOGIES' : 'TECNOLOGÍAS'}</b>
                            <div>
                                <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/c-plusplus.svg').default} title="C++" alt='c++'/></a>
                                <a href="https://www.w3schools.com/cs/index.php" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/c-sharp.svg').default} title="C#" alt='c#'/></a>
                                <a href="https://www.autodesk.com/products/eagle/overview?term=1-YEAR&tab=subscription" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/eagle.svg').default} title="Eagle" alt='eagle'/></a>
                                <a href="https://www.labcenter.com/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/proteus.png')} title="Proteus" alt='proteus'/></a>
                                <a href="https://www.microchip.com/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/microchip.png')} title="Microchip" alt='microchip'/></a>
                                <a href="https://www.overleaf.com/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/latex.svg').default} title="LaTeX" alt='latex'/></a>
                                <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"><img src={require('./../../images/iconduck/arduino.svg').default} title="Arduino" alt='arduino'/></a>
                            </div>
                        </div>
                        <div>
                            <b>{selectLan ? 'LINKS' : 'ENLACES'}</b>
                            <div>
                                <a href="http://proyectos-vri.unsa.edu.pe/proyectos_vri/index.php/report/index/250" target="_blank" rel="noreferrer">
                                    <ion-icon name="globe" size="large"></ion-icon>
                                </a>
                                <a href='https://redidi.org.pe/investigadores-unsa-presentan-proyecto-de-traje-de-mioestimulacion-electrica-para-mejor-control-de-diabeticos-con-insuficiencia-cardiaca/' target="_blank" rel="noreferrer">
                                    <ion-icon name="newspaper" size="large"></ion-icon>
                                </a>
                                <a href="https://es-es.facebook.com/PaginaOficialUNSA/videos/envivo-presentaci%C3%B3n-de-resultados-del-proyecto-de-investigaci%C3%B3n-desarrollo-de-un/409750640004372/" target="_blank" rel="noreferrer">
                                    <ion-icon name="logo-facebook" size="large"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section4' ref={testRef4} onMouseEnter={() => scrollSelect( '#4' )} onTouchStart={() => scrollSelect( '#4' )}>
                <h2>{selectLan ? 'Published scientific articles' : 'Artículos científicos publicados'}</h2>
                <div className='container'>
                    <div className='c-info'>
                        <a href="https://www.mdpi.com/2218-6581/11/5/100" target="_blank" rel="noreferrer">
                            <h4>Assisted Operation of a Robotic Arm Based on Stereo Vision for Positioning near an Explosive Device</h4>
                            <i>MDPI | Robotics | 2022</i>
                            <p><b>DOI:</b> 10.3390/robotics11050100</p>
                        </a>
                    </div>
                    <div className='c-info'>
                        <a href="https://thesai.org/Publications/ViewPaper?Volume=13&Issue=7&Code=IJACSA&SerialNo=104" target="_blank" rel="noreferrer">
                            <h4>Development of a Low-Cost Teleoperated Explorer Robot (TXRob)</h4>
                            <i>SAI | IJACSA | 2022</i>
                            <p><b>DOI:</b> 10.14569/IJACSA.2022.01307104</p>
                        </a>
                    </div>
                    <div className='c-info'>
                        <a href="https://www.mdpi.com/2079-9292/11/11/1690" target="_blank" rel="noreferrer">
                            <h4>Analysis of a User Interface Based on Multimodal Interaction to Control a Robotic Arm for EOD Applications</h4>
                            <i>MDPI | Electronics | 2022</i>
                            <p><b>DOI:</b> 10.3390/electronics11111690</p>
                        </a>
                    </div>
                    <div className='c-info'>
                        <a href="https://ieeexplore.ieee.org/document/9526934" target="_blank" rel="noreferrer">
                            <h4>Design of a User Interface to Estimate Distance of Moving Explosive Devices with Stereo Cameras</h4>
                            <i>IEEE | ICIVC | 2021</i>
                            <p><b>DOI:</b> 10.1109/ICIVC52351.2021.9526934</p>
                        </a>
                    </div>
                    <div className='c-info'>
                        <a href="https://ieeexplore.ieee.org/document/8853561" target="_blank" rel="noreferrer">
                            <h4>Non-invasive glucose monitor based on electric bioimpedance using AFE4300</h4>
                            <i>IEEE | INTERCON | 2019</i>
                            <p><b>DOI:</b> 10.1109/INTERCON.2019.8853561</p>
                        </a>
                    </div>
                    <div className='c-info'>
                        <a href="https://ieeexplore.ieee.org/document/8692535" target="_blank" rel="noreferrer">
                            <h4>Design and Development of an Optimized Output Stage for Electrical Stimulation</h4>
                            <i>IEEE | ENBENG | 2019</i>
                            <p><b>DOI:</b> 10.1109/ENBENG.2019.8692535</p>
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

export default withRouter( Works_E );
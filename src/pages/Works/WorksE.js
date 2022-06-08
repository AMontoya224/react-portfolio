import React from 'react';
import { withRouter } from 'react-router-dom';
import Left2 from '../../components/Left/Left2';
import './Works.css';
import robot1 from './../../images/robot-1.jpg';
import robot2 from './../../images/robot-2.jpg';
import proteus from './../../images/iconduck/proteus.png';
import microchip from './../../images/iconduck/motorola-Logo.png';
import siso1 from './../../images/siso-1.png';
import siso2 from './../../images/siso-2.png';
import vest1 from './../../images/vest-1.jpg';
import vest2 from './../../images/vest-2.png';
import electronic from './../../images/electronic-rrr.png';


function Works_E( props ) {
    const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4, selectLan } = props;

    const scrollToBack = () => {
        props.history.push("/projects");
        testRef1.current.scrollIntoView( {block: "start"} );
    };

    return (
        <div className="WorksE">
            <div className='section1'ref={testRef1}>
                <img src={electronic} alt='developer'/>
                <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
                <Left2 onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
                <h2>{selectLan ? 'Explosive ordnance disposal robot' : 'Robot de eliminación de explosivos'}</h2>
                <div className='top'>
                    <div>
                        <b>{selectLan ? 'ROLE' : 'CARGO'}</b>
                        <b className='top-d'>{selectLan ? 'DATE' : 'FECHA'}</b>
                        <b className='top-o'>{selectLan ? 'OVERVIEW' : 'VISIÓN GENERAL'}</b>
                    </div>
                    <div>
                        <p>{selectLan ? 'Developer | Electronic engineer' : 'Desarrollador | Ingeniero electrónico'}</p>
                        <p className='top-d'>{selectLan ? 'SEPTEMBER 2020' : 'SEPTIEMBRE 2020'}</p>
                        <p className='top-o'>{selectLan ? 'Development of artificial vision, control of the robotic arm through cameras' : 'Desarrollo de visión artificial, control del brazo robótico a través de cámaras'}</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='container-t'>
                        <img className='img-b-t' src={robot1} alt='robot'/>
                        <img className='img-b-b' src={robot2} alt='robot'/>
                    </div>
                    <div className='container-b'>
                        <div>
                            <b>{selectLan ? 'TECHNOLOGIES' : 'TECNOLOGÍAS'}</b>
                            <div>
                                <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                                <img src={require('./../../images/iconduck/qtproject-designer.svg').default} title="QtDesigner" alt='qtdesigner'/>
                                <img src={require('./../../images/iconduck/matlab.svg').default} title="MatLab" alt='matlab'/>
                                <img src={require('./../../images/iconduck/solidworks.svg').default} title="SolidWorks" alt='solidworks'/>
                                <img src={require('./../../images/iconduck/icons8-autocad.svg').default} title="AutoCAD" alt='autocad'/>
                                <img src={require('./../../images/iconduck/icons8-3ds-max.svg').default} title="3Ds Max" alt='3dsmax'/>
                                <img src={require('./../../images/iconduck/icons8-davinci-resolver.svg').default} title="DaVinci" alt='davinci'/>
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
            <div className='section1' ref={testRef2}>
                <h2>{selectLan ? 'Driver drowsiness detection' : 'Detección de somnolencia'}</h2>
                <div className='top'>
                    <div>
                        <b>{selectLan ? 'ROLE' : 'CARGO'}</b>
                        <b className='top-d'>{selectLan ? 'DATE' : 'FECHA'}</b>
                        <b className='top-o'>{selectLan ? 'OVERVIEW' : 'VISIÓN GENERAL'}</b>
                    </div>
                    <div>
                        <p>{selectLan ? 'Electronic engineer | Researcher' : 'Ingeniero electrónico | Investigador'}</p>
                        <p className='top-d'>{selectLan ? 'JANUARY 2020' : 'ENERO 2020'}</p>
                        <p className='top-o'>{selectLan ? 'Development of a sleepiness detection system for transport drivers' : 'Desarrollo de un sistema de detección de somnolencia para conductores de transporte'}</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='container-t'>
                        <img className='img-b-t' src={siso1} alt='siso'/>
                        <img className='img-b-b' src={siso2} alt='siso'/>
                    </div>
                    <div className='container-b'>
                        <div>
                            <b>{selectLan ? 'TECHNOLOGIES' : 'TECNOLOGÍAS'}</b>
                            <div>
                            <img src={require('./../../images/iconduck/python.svg').default} title="Python" alt='python'/>
                            <img src={require('./../../images/iconduck/matlab.svg').default} title="MatLab" alt='matlab'/>
                            <img src={require('./../../images/iconduck/raspberry-pi.svg').default} title="Raspberry Pi" alt='raspberry'/>
                            <img src={require('./../../images/iconduck/c-original.svg').default} title="C" alt='c'/>
                            <img src={microchip} title="Microchip" alt='microchip'/>
                            <img src={require('./../../images/iconduck/visual-studio-code.svg').default} title="VS Code" alt='vscode'/>

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
            <div className='section1' ref={testRef3}>
                <h2>{selectLan ? 'Desing of electrostimulation vest' : 'Chaleco de electroestimulación'}</h2>
                <div className='top'>
                    <div>
                        <b>{selectLan ? 'ROLE' : 'CARGO'}</b>
                        <b className='top-d'>{selectLan ? 'DATE' : 'FECHA'}</b>
                        <b className='top-o'>{selectLan ? 'OVERVIEW' : 'VISIÓN GENERAL'}</b>
                    </div>
                    <div>
                        <p>{selectLan ? 'Electronic engineer' : 'Ingeniero electronico'}</p>
                        <p className='top-d'>{selectLan ? 'OCTOBER 2018' : 'OCTUBRE 2018'}</p>
                        <p className='top-o'>{selectLan ? 'Research and programming of the Kotz electric wave output station' : 'Investigación y programación de la estación de salida de ondas eléctricas Kotz'}</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='container-t'>
                        <img className='img-b-t' src={vest1} alt='vest'/>
                        <img className='img-b-b' src={vest2} alt='vest'/>
                    </div>
                    <div className='container-b'>
                        <div>
                            <b>{selectLan ? 'TECHNOLOGIES' : 'TECNOLOGÍAS'}</b>
                            <div>
                                <img src={require('./../../images/iconduck/c-plusplus.svg').default} title="C++" alt='c++'/>
                                <img src={require('./../../images/iconduck/c-sharp.svg').default} title="C#" alt='c#'/>
                                <img src={require('./../../images/iconduck/eagle.svg').default} title="Eagle" alt='eagle'/>
                                <img src={proteus} title="Proteus" alt='proteus'/>
                                <img src={microchip} title="Microchip" alt='microchip'/>
                                <img src={require('./../../images/iconduck/icons8-texshop.svg').default} title="LaTeX" alt='latex'/>
                                <img src={require('./../../images/iconduck/arduino.svg').default} title="Arduino" alt='arduino'/>
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
            <div className='section4' ref={testRef4}>
                <h2>{selectLan ? 'Published scientific articles' : 'Artículos científicos publicados'}</h2>
                <div className='container'>
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
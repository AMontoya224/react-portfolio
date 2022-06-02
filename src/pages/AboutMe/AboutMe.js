import React from 'react';
import { withRouter } from 'react-router-dom';
import './AboutMe.css';
import Left2 from './../../components/Left/Left2';
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
    const { onSelectLeft, selectLeft, testRef1, testRef2, testRef3, testRef4 } = props;;

    const scrollToBack = () => {
        onSelectLeft( '#3' );
        props.history.push("/");
        testRef3.current.scrollIntoView( {block: "start"} );
    };

    return (
        <div className="AboutMe">
            <div className='section1' ref={testRef1}>
                <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
                <Left2 onSelectLeft={onSelectLeft} selectLeft={selectLeft} testRef1={testRef1} testRef2={testRef2} testRef3={testRef3} testRef4={testRef4}/>
                <p className='H-title'>About Me</p>
                <button className='H-sub'>
                    <div className='s1'></div>
                     
                    <div className='s2'></div>
                </button>
                <p className='H-main'>I love Design, Technology, and Story.</p>
            </div>
            <div className='section2'ref={testRef2}>
                <h2>Who I Am</h2>
                <h3>Andres Montoya</h3>
                <p>Hello! I was born in Arequipa in 1998. After graduating as an electronic engineer and after being in charge of some research projects, I decided to study and become a full stack developer.</p>
                <p>I haven't regretted that decision for a moment and can't wait to learn more!</p>
                <i>"Learning should not stop"</i>
            </div>
            <div className='section3' ref={testRef3}>
                <h2>Skill Set</h2>
                <div className='row'>
                    <div className='container'>
                        <h3>SOFTWARE DEVELOPMENT</h3>
                        <div>
                            <div>
                                <p>Languages</p>
                                <div>
                                    <img className='SL-img gold' src={javascript} alt='javascript'/>
                                    <img className='SL-img gold' src={require('./../../images/iconduck/python.svg').default} alt='python'/>
                                    <img className='SL-img bronze' src={require('./../../images/iconduck/java-original.svg').default} alt='java'/>
                                    <img className='SL-img diamond' src={require('./../../images/iconduck/file-type-html.svg').default} alt='html'/>
                                    <img className='SL-img diamond' src={require('./../../images/iconduck/file-type-css.svg').default} alt='css'/>
                                    <img className='SL-img silver' src={require('./../../images/iconduck/file-type-sql.svg').default} alt='sql'/>
                                </div>
                            </div>
                            <div>
                                <p>Frameworks</p>
                                <div>
                                    <img className='SF-img diamond' src={require('./../../images/iconduck/react.svg').default} alt='react'/>
                                    <img className='SF-img silver' src={express} alt='express'/>
                                    <img className='SF-img silver' src={require('./../../images/iconduck/file-type-django.svg').default} alt='django'/>
                                    <img className='SF-img silver' src={require('./../../images/iconduck/icons8-flask.svg').default} alt='flask'/>
                                    <img className='SF-img bronze' src={require('./../../images/iconduck/spring.svg').default} alt='spring'/>
                                    <img className='SF-img silver' src={require('./../../images/iconduck/jquery-plain.svg').default} alt='jquery'/>
                                    <img className='SF-img gold' src={ajax} alt='ajax'/>
                                    <img className='SF-img silver' src={require('./../../images/iconduck/socket-io.svg').default} alt='socket'/>
                                    <img className='SF-img silver' src={require('./../../images/iconduck/bootstrap.svg').default} alt='bootstrap'/>
                                    <img className='SF-img bronze' src={require('./../../images/iconduck/foundation.svg').default} alt='foundation'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div>
                                    <p>Database</p>
                                    <div>
                                        <img className='SD-img gold' src={require('./../../images/iconduck/mongodb-original.svg').default} alt='mongodb'/>
                                        <img className='SD-img gold' src={require('./../../images/iconduck/mysql-original-wordmark.svg').default} alt='mysql'/>
                                        <img className='SD-img bronze' src={require('./../../images/iconduck/file-type-sqlite.svg').default} alt='sqlite'/>
                                    </div>
                                </div>
                                <div>
                                    <p>Software</p>
                                    <div>
                                        <img className='SS-img silver' src={require('./../../images/iconduck/github.svg').default} alt='github'/>
                                        <img className='SS-img silver' src={require('./../../images/iconduck/postman.svg').default} alt='postman'/>
                                        <img className='SS-img gold' src={require('./../../images/iconduck/git.svg').default} alt='gitbash'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <h3>ELECTRONIC ENGINEERING</h3>
                        <div>
                            <div>
                                <p>Languages</p>
                                <div>
                                    <img className='EL-img silver' src={require('./../../images/iconduck/c-original.svg').default} alt='c'/>
                                    <img className='EL-img silver' src={require('./../../images/iconduck/c-plusplus.svg').default} alt='c++'/>
                                    <img className='EL-img bronze' src={require('./../../images/iconduck/c-sharp.svg').default} alt='c#'/>
                                    <img className='EL-img diamond' src={require('./../../images/iconduck/python.svg').default} alt='python'/>
                                    <img className='EL-img diamond' src={require('./../../images/iconduck/matlab.svg').default} alt='matlab'/>
                                    <img className='EL-img silver' src={require('./../../images/iconduck/file-type-vhdl.svg').default} alt='vhdl'/>
                                    <img className='EL-img bronze' src={require('./../../images/iconduck/file-type-assembly.svg').default} alt='assembler'/>
                                    <img className='EL-img gold' src={require('./../../images/iconduck/icons8-texshop.svg').default} alt='latex'/>
                                </div>
                            </div>
                            <div>
                                <p>Software</p>
                                <div>
                                    <img className='ES-img diamond' src={require('./../../images/iconduck/solidworks.svg').default} alt='solidworks'/>
                                    <img className='ES-img silver' src={require('./../../images/iconduck/icons8-3ds-max.svg').default} alt='3dsmax'/>
                                    <img className='ES-img silver' src={require('./../../images/iconduck/icons8-autocad.svg').default} alt='autocad'/>
                                    <img className='ES-img diamond' src={require('./../../images/iconduck/eagle.svg').default} alt='eagle'/>
                                    <img className='ES-img silver' src={proteus} alt='proteus'/>
                                    <img className='ES-img silver' src={require('./../../images/iconduck/qtproject-designer.svg').default} alt='qtdesigner'/>
                                    <img className='ES-img gold' src={microchip} alt='microchip'/>
                                    <img className='ES-img silver' src={require('./../../images/iconduck/arduino.svg').default} alt='arduino'/>
                                    <img className='ES-img bronze' src={xilinx} alt='xilinx'/>
                                    <img className='ES-img gold' src={require('./../../images/iconduck/visual-studio-code.svg').default} alt='vscode'/>
                                    <img className='ES-img bronze' src={require('./../../images/iconduck/icons8-davinci-resolver.svg').default} alt='davinci'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section4'ref={testRef4}>
                <h2>Education</h2>
                <div>
                    <div className='E-container'>
                        <a href="https://drive.google.com/file/d/1IU2z8yiL5XjO0Qd-C2vgPLC34z3cAFw4/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img className='E-logo' src={coding} alt='coding'/>
                            <div className='E-info'>
                                <h3>Coding Dojo Academy</h3>
                                <h4>Full Stack Developer</h4>
                                <i>January 2022 - April 2022</i>
                                <ul>
                                    <li>Web Fundamentals</li>
                                    <li>Python - Red Belt</li>
                                    <li>Java - Black Belt</li>
                                    <li>MERN - Black Belt</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className='E-container E-container-C'>
                        <a href="https://drive.google.com/file/d/1KWhjxaZMYPExmHJureVZ1XCuRgTMglf1/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img className='E-logo-C' src={cayetano} alt='cayetano'/>
                            <div className='E-info'>
                                <h3>Universidad Peruana Cayetano Heredia</h3>
                                <h4>Writing of Scientific Articles</h4>
                                <i>November 2020 - December 2020</i>
                                <ul>
                                    <li>Materials and Methods</li>
                                    <li>Results and Discussion</li>
                                    <li>Introduction and Summary</li>
                                    <li>Reference Managers</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div className='E-container'>
                        <a href="https://drive.google.com/file/d/1k4mr1NSpC291MTu7i23XSuOWoPsKJidG/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img className='E-logo' src={unsa} alt='unsa'/>
                            <div className='E-info'>
                                <h3>Universidad Nacional de San Agustin</h3>
                                <h4>Electronic Engineering</h4>
                                <i>March 2015 - August 2020</i>
                                <ul>
                                    <li>Upper Fifth</li>
                                    <li>Junior Researcher</li>
                                    <li>Member of IEEE RAS</li>
                                    <li>Member of ASME</li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </div>
                <footer>
                    <p>Developed by <span>Andres Montoya Angulo</span></p>
                </footer>
            </div>
        </div>
    );
}

export default withRouter( AboutMe );
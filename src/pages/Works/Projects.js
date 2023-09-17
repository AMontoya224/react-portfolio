import React from 'react';
import { withRouter } from 'react-router-dom';
import './Projects.css';


function Projects( props ) {
    const { scrollToBack, selectLan } = props;

    return (
        <div className="Projects">
            <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
            <h1>Developed Projects</h1>
            <main>
                <div>
                    <img src={require('./../../images/jtech.png')} alt='jtech'/>
                    <div>
                        <h3 className='jtech'><b>J</b> - TECHNOLOGY</h3>
                        <p>J - TECHNOLOGY es una aplicación desarrollada para una empresa en el rubro de la ingeniería electrónica</p>
                        <ul>
                            <li><b>Cliente:</b> React.</li>
                            <li><b>Librerias:</b> Axios, Emailjs-com, Json-Server, </li>
                        </ul>
                        <div>
                            <a title='Deploy' href="https://jtechnologyaqp.com/" target="_blank" rel="noreferrer">
                                <span class="material-symbols-outlined">deployed_code</span>
                            </a>
                            <a title='Code' href="https://github.com/AMontoya224/j-technology" target="_blank" rel="noreferrer">
                                <span class="material-symbols-outlined">code</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={require('./../../images/evertask.png')} alt='evertask'/>
                    <div>
                        <h3 className='evertask'>Ever<b>Task</b></h3>
                        <p>EverTask es una aplicación desarrollada con los lenguajes:</p>
                        <ul>
                            <li><b>Cliente:</b> React.</li>
                            <li><b>Servidor:</b> NodeJS.</li>
                            <li><b>Base de datos:</b> MongoDB.</li>
                            <li><b>Librerias:</b> Axios, BCrypt, Express, JsonWebToken.</li>
                        </ul>
                        <div>
                            <a title='Deploy' href="https://gregarious-donut-abb4e7.netlify.app/" target="_blank" rel="noreferrer">
                                <span class="material-symbols-outlined">deployed_code</span>
                            </a>
                            <a title='Code' href="https://github.com/AMontoya224/every_task" target="_blank" rel="noreferrer">
                                <span class="material-symbols-outlined">code</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default withRouter( Projects );
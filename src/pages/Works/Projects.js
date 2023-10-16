import React from 'react';
import { withRouter } from 'react-router-dom';
import './Projects.css';


function Projects( props ) {
    const { scrollToBack, selectLan } = props;

    return (
        <div className="Projects">
            <button onClick={scrollToBack} className='B-return'><span className="material-icons-round return">keyboard_backspace</span><p>BACK</p></button>
            <h3>{selectLan ? 'Developed Projects' : 'Proyectos Desarrollados'}</h3>
            <main>
                <div>
                    <img src={require('./../../images/jtech.webp')} alt='jtech'/>
                    <div>
                        <h4 className='jtech'><b>J</b> - TECHNOLOGY</h4>
                        <p>{selectLan ? 'J - TECHNOLOGY is an application developed for a company in the field of electronic engineering' : 'J - TECHNOLOGY es una aplicación desarrollada para una empresa en el rubro de la ingeniería electrónica'}</p>
                        <ul>
                            <li><b>{selectLan ? 'Client:' : 'Cliente:'}</b> React.</li>
                            <li><b>{selectLan ? 'Libraries:' : 'Librerias:'}</b> Axios, Emailjs-com, Json-Server.</li>
                        </ul>
                        <div>
                            <a title='Deploy' href="https://jovial-faun-ed7858.netlify.app/" target="_blank" rel="noreferrer">
                                <span class="material-symbols-outlined">deployed_code</span>
                            </a>
                            <a title='Code' href="https://github.com/AMontoya224/j-technology" target="_blank" rel="noreferrer">
                                <span class="material-symbols-outlined">code</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={require('./../../images/evertask.webp')} alt='evertask'/>
                    <div>
                        <h4 className='evertask'>Ever<b>Task</b></h4>
                        <p>{selectLan ? 'EverTask is an application developed with:' : 'EverTask es una aplicación desarrollada con:'}</p>
                        <ul>
                            <li><b>{selectLan ? 'Client:' : 'Cliente:'}</b> React.</li>
                            <li><b>{selectLan ? 'Server:' : 'Servidor:'}</b> NodeJS.</li>
                            <li><b>{selectLan ? 'Database:' : 'Base de datos:'}</b> MongoDB.</li>
                            <li><b>{selectLan ? 'Libraries:' : 'Librerias:'}</b> Axios, BCrypt, Express, JsonWebToken.</li>
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
import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0662168164">
                                <span className="clickInput" 
                                onClick={()=>{ alert('Téléphone copié')}}>
                                    0662168164</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="jportega97@gmail.com">
                                <span className="clickInput" 
                                onClick={()=>{ alert('E-mail copié')}}>
                                    jportega97@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                      <a href="https://www.linkedin.com/in/juan-pedro-ortega-alguacil-121155113/" target="_blank" rel="noopener noreferrer">
                          <h4>LinkedIn</h4>
                          <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://github.com/JuanPedro-Ortega" target="_blank" rel="noopener noreferrer">
                           <h4>GitHub</h4>
                           <i className="fab fa-github"></i>
                      </a>
                      <a href="https://codepen.io/juanpedroortega" target="_blank" rel="noopener noreferrer">
                          <h4>CodePen</h4>
                          <i className="fab fa-codepen"></i>
                      </a>     
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/Fotojp.jpg" alt="profil-pic"/>
                    <h3>Juan Pedro Ortega Alguacil</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>   
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/juan-pedro-ortega-alguacil-121155113/" target="blank"
                        rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/JuanPedro-Ortega" target="blank"
                        rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://codepen.io/juanpedroortega" target="blank"
                        rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
            </div>

            <div className="signature">
                <i className="far fa-copyright"></i>
                <p>2021</p>
            </div>
        </div>
    );
};

export default Navigation;
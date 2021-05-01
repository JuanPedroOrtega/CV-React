import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectProvisional = () => {
    return (
        <div className="notFound">
        <div className="notFoundContent">
            <h3> Cette page est en travaux.</h3>
            <NavLink exact to="/">
                <i className="fas fa-home"></i>
                <span>Accueil</span>
            </NavLink>
        </div>
    </div>
    );
};

export default ProjectProvisional;
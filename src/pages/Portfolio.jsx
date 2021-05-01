import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';
import ProjectProvisional from '../components/portfolio/ProjectProvisional';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation/>
            <ProjectProvisional/>
            {/*<ProjectList />*/}
        </div>
    );
};

export default Portfolio;
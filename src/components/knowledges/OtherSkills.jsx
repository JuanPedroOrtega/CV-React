import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li><i className="fas fa-check-square"></i>
                        Espagnol</li>
                    <li><i className="fas fa-check-square"></i>
                        GitHub</li>
                    <li><i className="fas fa-check-square"></i>
                        Méthodes agiles</li>
                    <li><i className="fas fa-check-square"></i>
                        Customer service</li>
                </ul>
                {/*<ul>
                    <li><i className="fas fa-check-square"></i>
                        Design</li>
                    <li><i className="fas fa-check-square"></i>
                        Photoshop</li>
                    <li><i className="fas fa-check-square"></i>
                        Figma</li>
                    <li><i className="fas fa-check-square"></i>
                        Danser</li>
                </ul>*/}
            </div>
        </div>
    );
};

export default OtherSkills;
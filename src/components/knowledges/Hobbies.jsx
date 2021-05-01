import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-basketball-ball"></i>
                    <span>Basketball</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Randonnées</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-guitar"></i>
                    <span>Guitar & music </span>
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    <span>Gaming</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;
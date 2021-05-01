import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "JavaScript", xp: 1 },
            {id: 2, value: "Css", xp: 1.2 },
            //{id: 3, value: "Python", xp: 0 },
            //{id: 4, value: "Swift", xp: 0 }
        ],
        frameworks: [
            {id: 1, value: "React", xp: 1.1 },
            {id: 2, value: "Bootstrap", xp: 0.6 },
            //{id: 3, value: "Material UI", xp: 0 },
            //{id: 4, value: "Sass", xp: 0 }
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}   
                    className="languagesDisplay"
                    title="languages"             
                />
                <ProgressBar 
                    languages={frameworks}
                    title="frameworks & blibliotéques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;
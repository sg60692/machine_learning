import React from 'react';
import './Project.scoped.css';
import ProjectAbout from './Project_about';
import ProjectGraph from './Project_graph';

function Project(props) {   
    return (
        <div id={props.url} className="Project">
            <div className="Project-heading">
                <h1>{props.name}</h1>
            </div>
            <ProjectAbout {...props}/>
            <ProjectGraph {...props}/>
            <hr />
        </div>
    )
}
export default Project;

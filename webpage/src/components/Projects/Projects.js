import React from 'react';
import './Projects.scoped.css';
import Project from '../Project/Project.js';
import ProjectList from './ProjectList.js';
function makeProjects()
{
    var list = [];
    for(let i=0;i<ProjectList.length;++i)list.push(<Project {...ProjectList[i]} key={ProjectList[i].url}/>);
    return list;
}
function Projects() {
    return (
        <div className="Projects">
            {makeProjects()}
        </div>
    )
}
export default Projects;

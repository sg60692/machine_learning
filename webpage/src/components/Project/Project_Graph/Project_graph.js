import React, { useState } from 'react';
import './Project_graph.scoped.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppsIcon from '@material-ui/icons/Apps';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

function Project_graph(props) {
    const [insightToggle, setToggle] = useState(false)
    function Toggle() {
        setToggle(!insightToggle);
        console.log(props.github);
    }
    return (
        <div className="Project-graph">
            <img src={props.img} alt="graph" />
            <div className="Project-graph-links">
                <div className={`insights ${insightToggle ? 'insights-display' : ''}`} >
                    <IconButton className="cancel" onClick={Toggle}><CancelIcon /> </IconButton>
                    <br /> <p>{props.insights}</p>
                </div>
                <button className="view-insights" onClick={Toggle}><span>View Insights</span><AppsIcon /></button>
                <a href={props.dataset}><button className="view-dataset"><span>View Dataset</span><AssignmentIcon /></button></a>
                <a href={props.github}><button className="view-code"><span>View Code</span><GitHubIcon /></button></a>
            </div>
        </div>
    )
}

export default Project_graph

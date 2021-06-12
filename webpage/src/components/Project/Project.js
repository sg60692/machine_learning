import React, { useState } from 'react';
import './Project.scoped.css';
import * as api from './../../api';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppsIcon from '@material-ui/icons/Apps';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
function Project(props) {
    var features = props.features;
    const numberOfFeatures = features.length;
    const initialState = {};
    for (var i = 0; i < numberOfFeatures; ++i) initialState[features[i]] = "";
    const [featureValue, setFeatureValue] = useState(initialState);
    const [insightToggle, setToggle] = useState(false)
    function Toggle() {
        setToggle(!insightToggle);
        console.log("hi");
    }
    function inputs() {
        var list = [];
        for (var i = 0; i < numberOfFeatures; ++i)
            list.push(<input
                name={features[i]}
                value={featureValue[features[i]]}
                onChange={(e) => setFeatureValue({ ...featureValue, [e.target.name]: e.target.value })}
                placeholder={features[i]}
                required
                title={features[i]}
                type="number" />);
        return list;
    }

    function RandomInitialization(e) {
        const randomFeatures = {};
        for (var i = 0; i < numberOfFeatures; ++i) randomFeatures[features[i]] = Math.ceil(Math.random() * 10);
        setFeatureValue(randomFeatures);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = await api.fetchreq(featureValue, props.url);
        console.log(data.data);
        setFeatureValue(initialState);
    }

    return (
        <div id={props.name} className="Project">
            <div className="Project-heading">
                <h1>{props.name}</h1>
            </div>
            <div className="Project-about">
                <div className="Project-about-context">
                    <h3>{props.algorithm}</h3>
                    <h5>{props.subheading}</h5>
                    <div>{props.description}</div>
                </div>
                <div className="Project-input">
                    <div className="Project-input-heading">
                        <h4>Test Input</h4>
                    </div>
                    <form className="Project-form" onSubmit={handleSubmit}>
                        <div className="Project-form-grid">{inputs()}</div>
                        <div className="Project-form-grid" style={{ marginTop: '10px' }}>
                            <button onClick={RandomInitialization} type="button" class="btn-random">Random</button>
                            <button type="reset" onClick={(e) => setFeatureValue(initialState)} class="btn-clear">Clear</button>
                            <button type="submit" class="btn-submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="Project-graph">
                <img src={props.img} />
                <div className="Project-graph-links">
                    <div className={`insights ${insightToggle ? 'insights-display' : ''}`} >
                        <IconButton className="cancel" onClick={Toggle}><CancelIcon /> </IconButton>
                        <p>{props.insights}</p>
                    </div>
                    <button className="view-insights" onClick={Toggle}><span>View Insights</span><AppsIcon /></button>
                    <a href={props.dataset}><button className="view-dataset"><span>View Dataset</span><AssignmentIcon /></button></a>
                    <a href={props.github}><button className="view-code"><span>View Code</span><GitHubIcon /></button></a>
                </div>
            </div>
            <hr />
        </div>
    )
}
export default Project;

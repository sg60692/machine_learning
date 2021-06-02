import React, { useState } from 'react';
import './Project.scoped.css';
import * as action from './../../action';

var features = ['clump_thickness', 'uniform_cell_size', 'uniform_cell_shape',
    'marginal_adhesion', 'single_epithelial_size', 'bare_nuclei',
    'bland_chromatin', 'normal_nucleoli', 'mitoses']

const numberOfFeatures = features.length;

function Project() {

    const initialState = {};
    for (var i = 0; i < numberOfFeatures; ++i) initialState[features[i]] = {};
    const [featureValue, setFeatureValue] = useState(initialState);

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

    function handleSubmit(e) {
        e.preventDefault();
        const data = action.fetchreq(featureValue);
        console.log(data);
        setFeatureValue(initialState);
    }

    return (
        <div style={{ width: '100%', position: 'relative' }}>
            <div className="Project-heading">
                <h1>Cancer Prediction</h1>
            </div>
            <div className="Project-about">
                <div className="Project-about-context">
                    <h3>
                        Logistic Regression
                    </h3>
                    <h5>
                        Predict your chances of getting cancer
                    </h5>
                    <div>
                        We aim to provide our customers an easygoing experience and
                        we hope to satisfy their expectations.Our goal is to fulfill
                        our purchase orders way before they hit their deadlines.
                        We provide excellent quality product, and each and every product of
                        ours is ensured to have the best raw material and depiction
                        of craftsmanship skills.
                    </div>
                </div>
                <div className="Project-input">
                    <div className="Project-input-heading">
                        <h4>Test Input</h4>
                    </div>
                    <form className="Project-form" onSubmit={handleSubmit}>
                        {inputs()}
                        <button onClick={RandomInitialization} type="button">Randomly Initiallize</button>
                        <button type="reset" onClick={(e) => setFeatureValue(initialState)} >Clear</button>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="Project-graph">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3KBgcaUBGmQcWDrDf-SkVi7YADB7BWnEow&usqp=CAU" />
                <div className=".Project-graph-links">
                </div>
            </div>
        </div>
    )
}
export default Project;

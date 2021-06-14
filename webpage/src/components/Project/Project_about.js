import React,{useState} from 'react';
import './Project.scoped.css';
import * as api from './../../api';

function Project_about(props) {
    var features = props.features;
    const numberOfFeatures = features.length;
    const initialState = {};
    for (var i = 0; i < numberOfFeatures; ++i) initialState[features[i]] = "";
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
                key={features[i]}
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
        console.log(data);
        setFeatureValue(initialState);
    }
    return (
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
                        <button onClick={RandomInitialization} type="button" className="btn-random">Random</button>
                        <button type="reset" onClick={(e) => setFeatureValue(initialState)} className="btn-clear">Clear</button>
                        <button type="submit" className="btn-submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Project_about

import React, { useState } from 'react';
import './Project_input.scoped.css';
import * as api from '../../../../api';
import sweetalert from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(sweetalert);

function Project_input(props) {
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
        MySwal.fire({
            title: " Result ",
            html: <Alert feature={featureValue} url={props.url} />,
            allowOutsideClick: false
        }).then(() => setFeatureValue(initialState));
    }
    return (
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
    )
}

function Alert(props) {
    const [alert, setalert] = useState({ text: "Loading..." });
    if (alert.text === "Loading...")
        api.fetchreq(props.feature, props.url).then(data => { setalert({ text: data.data });});

    return <div>{alert.text}</div>
}


export default Project_input

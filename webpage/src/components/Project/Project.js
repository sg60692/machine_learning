import React from 'react';
import './Project.scoped.css';
function inputs(){
    var list=[];
    for(var i=0;i<9;++i)list.push(<input/>);
    return list;
}
function Project() {
    return (
        <div style={{width:'100%',position:'relative'}}>
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
                    <form className="Project-form">
                        <input placeholder="Age"/>
                        {inputs()}
                    </form>
                </div>                
            </div>
            <div className="Project-graph">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3KBgcaUBGmQcWDrDf-SkVi7YADB7BWnEow&usqp=CAU"/>  
                <div className=".Project-graph-links">
                </div>             
            </div>
        </div>
    )
}
export default Project;

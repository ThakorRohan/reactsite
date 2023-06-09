import React from 'react';
const Index = props => {
    return (
        <>
            <div className={"iq-title-box iq-title-default " + props.className}>
                <div className={props.iconclass ? "iq-title-icon" : ''}></div>
                <span className="iq-subtitle"  > {props.subTitle}</span>
                <h2 className={"iq-title " + props.titleclassName} > {props.title}</h2>
                <p className={"iq-title-desc " + props.descclassName}  > {props.description}</p>
            </div>
        </>
    );
}

export default Index
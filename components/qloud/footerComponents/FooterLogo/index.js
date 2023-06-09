import React from 'react';

const Index = (props) => {

    return (
        <>
            <p >
                <img alt="img" className="mb-4 img-fluid" src={props.sectionImage} width="160" />
                <br />
                {props.sectionText}
            </p>


        </>
    );
};

export default Index;
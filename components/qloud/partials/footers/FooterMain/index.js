import React from 'react';

const Index = (props) => {

    return (
        <>
            <footer id="contact" className={props.className}>
                {props.children}
            </footer>
        </>
    );
};

export default Index;
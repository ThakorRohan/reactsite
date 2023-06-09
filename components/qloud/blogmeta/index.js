import React from 'react';
const Index = props => {
    return (
        <>
            <div className="widget widget_meta">
                <h2 className="widget-title">Meta</h2>
                <ul>
                    {
                        props.blogMetaData.map((meta, index) => (
                            <li key={index}><a href='#'>{meta.title}</a></li>

                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Index
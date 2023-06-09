import React from 'react';
const Index = props => {
    return (
        <>
            <div className="widget widget_archive">
                <h2 className="widget-title">Archives</h2>
                <ul>
                    {
                        props.blogArchiveData.map((data, index) => (
                            <li key={index}><a href='#'>{data.year}</a></li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Index
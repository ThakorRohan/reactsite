import React from 'react';
const Index = props => {
    return (
        <>
            <div className="widget widget_categories">
                <h2 className="widget-title">Categories</h2>
                <ul>
                    {
                        props.blogCategory.map((category, index) => (
                            <li className="cat-item" key={index}>
                                <a href="#">{category.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    );
}

export default Index
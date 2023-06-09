import React from 'react';
const Index = props => {
    return (
        <>
            <div className="widget widget_recent_entries">
                <h2 className="widget-title">Recent Posts</h2>
                <ul>
                    {
                        props.blogPost.map((post, index) => (
                            <li key={index}><a href="#">{post.title}</a></li>

                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Index
import React from 'react';
const Index = props => {
    return (
        <>
            <div className="widget widget_recent_comments">
                <h2 className="widget-title">Recent Comments</h2>
                <ul id="recentcomments">
                    {
                        props.commentList.map((comment, index) => (
                            <li className="recentcomments" key={index}>
                                <span className="comment-author-link">
                                    <a href='#' className='url'>{comment.title}</a>
                                </span>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </>
    );
}

export default Index
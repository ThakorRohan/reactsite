import React from 'react';
const Index = props => {
    return (
        <>
            <div className="row">
                {
                    props.blogCardList.map((blogcard, index) => (
                        <div className={props.colclassName} key={index}>
                            <div className="iq-blog-box">
                                <div className="iq-blog-image clearfix">
                                    <img src={blogcard.img} className="img-fluid" alt="qloud" />
                                    <ul className="iq-blogtag">
                                        <li><a href="#">{blogcard.name}</a></li>
                                    </ul>
                                </div>
                                <div className="iq-blog-detail">
                                    <div className="iq-blog-meta">
                                        <ul className="iq-postdate">
                                            <li className="list-inline-item">
                                                <i className="fa fa-calendar mr-2"></i>
                                                <span className="screen-reader-text">Posted on</span>
                                                <a href="#" rel="bookmark">
                                                    <time className="entry-date published updated" dateTime="2020-02-17T06:44:40+00:00">{blogcard.time}</time>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-title">
                                        <a href={blogcard.href}>
                                            <h5 className="mb-3">{blogcard.title}</h5>
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <p>{blogcard.desc}</p>
                                    </div>
                                    <div className="blog-button">

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
        </>
    );
}

export default Index
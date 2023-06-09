import React from 'react';
const Index = props => {
    return (
        <>
            <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="3" data-items-laptop="3"
                data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true"
                data-margin="30">
                {
                    props.blogList.map((list, index) => (
                        <div className="item" key={index}>
                            <div className="iq-blog-box">
                                <div className="iq-blog-image clearfix">
                                    <img src={list.img} className="img-fluid" alt="unisaas-blog" />
                                    <ul className="iq-blogtag">
                                        <li><a href="#">{list.name}</a></li>
                                    </ul>
                                </div>
                                <div className="iq-blog-detail">
                                    <div className="iq-blog-meta">
                                        <ul className="iq-postdate">
                                            <li className="list-inline-item">
                                                <i className="fa fa-calendar mr-2" aria-hidden="true"></i>
                                                <span className="screen-reader-text">Posted on</span>
                                                <a href="#" rel="bookmark">
                                                    <time className="entry-date published updated" dateTime="2020-02-17T06:43:49+00:00">{list.time}</time>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-title">
                                        <a href="#">
                                            <h5 className="mb-3">{list.title}</h5>
                                        </a>
                                    </div>
                                    <p className="">{list.desc}</p>
                                    <div className="blog-button">
                                        <a className="iq-btn-link" href="#">Read More<i className="ml-2 ion-ios-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    );
}

export default Index
import React, { useState } from 'react';

import BlogCard from '../../qloud/blogcard'
import BlogSearch from '../../qloud/blogsearch'
import BlogPost from '../../qloud/blogpost'
import BlogComment from '../../qloud/blogcomment'
import BlogArchive from '../../qloud/blogarchive'
import BlogCategory from '../../qloud/blogcategory'
import BlogMeta from '../../qloud/blogmeta'

const Index = props => {
    const [List] = useState([
        {
            img: '.../../../assets/images/blog/01.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'Build Construction',
            link: '/blog-details',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        },
        {
            img: '.../../../assets/images/blog/02.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'Official Terraform Provider',
            link: '/blog-details',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        },
        {
            img: '.../../../assets/images/blog/03.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'CCPA Compliance Update',
            link: '/blog-details',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        },
        {
            img: '.../../../assets/images/blog/04.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'Introducing Object Storage!',
            link: '/blog-details',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        },
        {
            img: '.../../../assets/images/blog/01.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'Content Marketing',
            link: '/blog-details',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        },
        {
            img: '.../../../assets/images/blog/02.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'Life Lack Meaning',
            link: '/blog-details',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        },
        {
            img: '.../../../assets/images/blog/03.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'Construction industry',
            link: '/blog-details',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        }
    ]);
    const [Post] = useState([
        { title: 'Official Terraform Provider' },
        { title: 'CCPA Compliance Update' },
        { title: 'Introducing Object Storage!' },
        { title: 'Content Marketing' },
        { title: 'Life Lack Meaning' },
    ]);
    const [CommentList] = useState([
        { title: 'A Html Commenter Construction industry' }
    ])
    const [Archive] = useState([
        { year: 'February 2020' }
    ])
    const [Category] = useState([
        { title: 'Marketing' }
    ])
    const [Meta] = useState([
        { title: 'Log in' },
        { title: 'Entries feed' },
        { title: 'Comments feed' },
    ])
    return (
        <>
            <div className="iq-blog-section overview-block-ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 mt-lg-0 mt-5">
                            <div className="iq-blog-box">
                                <div className="iq-blog-image clearfix">
                                    <img src="assets/images/blog/01.png" className="img-fluid" alt="qloud" />
                                    <ul className="iq-blogtag">
                                        <li><a href="#">Marketing</a></li>
                                    </ul>
                                </div>
                                <div className="iq-blog-detail">
                                    <div className="iq-blog-meta">
                                        <ul className="iq-postdate">
                                            <li className="list-inline-item">
                                                <i className="fa fa-calendar mr-2"></i>
                                                <span className="screen-reader-text">Posted on</span>
                                                <a href="#" rel="bookmark">
                                                    <time className="entry-date published updated" dateTime="2020-02-17T06:44:40+00:00">February 17, 2020</time>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-content">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#8216;Content here, content here&#8217;, making it look like readable English.</p>
                                        <blockquote className="wp-block-quote">
                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                            their default model text, and a search for &#8216;lorem ipsum&#8217; will
                                            uncover many web sites still in their infancy. – Someone famous in Source Title
                                    </p>
                                        </blockquote>
                                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                        letters, as opposed to using &#8216;Content here, content here&#8217;, making it
                                        look like readable English. Many desktop publishing packages and web page editors
                                        now use Lorem Ipsum as their default model text, and a search for &#8216;lorem
                                    ipsum&#8217; will uncover many web sites still in their infancy.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="comments" className="comments-area">
                                <div id="respond" className="comment-respond">
                                    <h3 id="reply-title" className="comment-reply-title">Leave a Reply
                                <small> <a rel="nofollow" id="cancel-comment-reply-link" style={{ display: "none" }}>Cancel reply</a></small>
                                    </h3>
                                    <form id="commentform" className="comment-form" noValidate>
                                        <p className="comment-notes">
                                            <span id="email-notes">Your email address will not be published.</span>
                                    Required fields are marked <span className="required">*</span>
                                        </p>
                                        <p className="comment-form-comment">
                                            <label htmlFor="comment">Comment</label>
                                            <textarea id="comment" name="comment" cols="45" rows="8" maxLength="65525" required="required"></textarea>
                                        </p>
                                        <p className="comment-form-author">
                                            <label htmlFor="author">Name <span className="required">*</span></label>
                                            <input id="author" name="author" type="text" defaultValue="" size="30" maxLength="245" required='required' />
                                        </p>
                                        <p className="comment-form-email">
                                            <label htmlFor="email">Email <span className="required">*</span></label>
                                            <input id="email" name="email" type="email" defaultValue="" size="30" maxLength="100" aria-describedby="email-notes" required='required' />
                                        </p>
                                        <p className="comment-form-url">
                                            <label htmlFor="url">Website</label>
                                            <input id="url" name="url" type="url" defaultValue="" size="30" maxLength="200" />
                                        </p>
                                        <p className="comment-form-cookies-consent">
                                            <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />
                                            <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                        <p className="form-submit">
                                            <input name="submit" type="submit" id="submit" className="submit" defaultValue="Post Comment" />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 mt-lg-0 mt-5">
                            <div id="secondary" className="widget-area">
                                <BlogSearch />
                                <BlogPost blogPost={Post} />
                                <BlogComment commentList={CommentList} />
                                <BlogArchive blogArchiveData={Archive} />
                                <BlogCategory blogCategory={Category} />
                                <BlogMeta blogMetaData={Meta} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index
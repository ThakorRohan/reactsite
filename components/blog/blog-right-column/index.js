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
            <div className="iq-blog-section overview-block-ptb iq-pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 mt-lg-0 mt-5">
                            <BlogCard colclassName="col-md-12 col-lg-12"
                                blogCardList={List} />
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
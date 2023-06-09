import React, { useState } from 'react';
import BlogCard from '../../qloud/blogcard'
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
    return (
        <>
            <section className="iq-blog-section iq-pb-55">
                <div className="container">
                    <div className="row">
                        <div className="iq-blog text-left ">
                            <BlogCard colclassName="col-md-6 col-lg-6"
                                blogCardList={List} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
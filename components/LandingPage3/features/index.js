import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {
    const [List] = useState([
        {
            title: 'Public Cloud',
            image: '../../../assets/images/icon-box/10.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
        },
        {
            title: 'Virtual Private Cloud',
            image: '../../../assets/images/icon-box/11.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
        },
        {
            title: 'Private Cloud',
            image: '../../../assets/images/icon-box/12.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
        },
        {
            title: 'Tally-as-a-Service',
            image: '../../../assets/images/icon-box/13.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
        },
        {
            title: 'Banking Community Cloud',
            image: '../../../assets/images/icon-box/14.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
        },
        {
            title: 'Load Balancing',
            image: '../../../assets/images/icon-box/15.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
        }
    ]);
    return (
        <>
            <section className="pt-0 iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Our Feature Services'
                                subTitle='Features'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5" key={index}>
                                    <div className="iq-icon-box iq-icon-box-style-8 text-center wow fadeInUp" data-wow-duration="0.6s">
                                        <div className="icon-box-img">
                                            <img src={list.image} className="img-fluid" title={index} alt="qloud" />
                                        </div>
                                        <div className="icon-box-content">
                                            <h5 className="icon-box-title"> <a href="#"> {list.title}</a> </h5>
                                            <p className="icon-box-desc">{list.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section >

        </>
    );
}

export default Index
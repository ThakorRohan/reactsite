import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {
    const [List] = useState([
        {
            title: 'Cloud Dataflow',
            image: '../../../assets/images/icon-box/10.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
        },
        {
            title: 'Cloud Dataproc',
            image: '../../../assets/images/icon-box/11.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
        },
        {
            title: 'Cloud Pub/Sub',
            image: '../../../assets/images/icon-box/13.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
        },
        {
            title: 'Cloud Data Transfer',
            image: '../../../assets/images/icon-box/12.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
        },
        {
            title: 'Cloud Data Fusion',
            image: '../../../assets/images/icon-box/06.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
        },
        {
            title: 'Cloud Composer',
            image: '../../../assets/images/icon-box/14.png',
            link: '/services',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
        }
    ]);
    return (
        <>
            <section className="pt-0 iq-pb-70 iq-data-product">
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Big data products'
                                subTitle='Products'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.2s" key={index}>
                                    <div className="iq-icon-box iq-icon-box-style-4 text-center iq-box-shadow">
                                        <div className="icon-box-img">
                                            <img src={list.image} className="img-fluid" alt="qloud" />
                                        </div>
                                        <div className="icon-box-content">
                                            <h5 className="icon-box-title"><a href="#">{list.title}</a></h5>
                                            <p className="icon-box-desc">{list.desc}</p>
                                            <div className="iq-btn-container">
                                                <a className="iq-button iq-btn-link has-icon btn-icon-right d-inline" ><i aria-hidden="true" className="ion ion-ios-arrow-right"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
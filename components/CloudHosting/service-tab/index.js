import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {
    const [List] = useState([
        {
            id: 'tab-expert-support',
            title: 'Expert Support',
            icon: 'ion ion-android-call',
            sub_title: "Spotlessly Optimized Call Flows",
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            services: [{ title: 'Boost SEO ranking' }, { title: 'Social Sharing' }, { title: 'Marketing' }, { title: 'Retention' }, { title: 'Visual Reviews' }, { title: 'Reviews Generation' }],
            link: '/about-us-1',
            active: true
        },
        {
            id: 'tab-performance',
            title: 'Performance',
            icon: 'fa fa-pie-chart',
            sub_title: "Real-Time Actionable Insights",
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            services: [{ title: 'Boost SEO ranking' }, { title: 'Social Sharing' }, { title: 'Marketing' }, { title: 'Retention' }, { title: 'Visual Reviews' }, { title: 'Reviews Generation' }],
            link: '/about-us-1'
        },
        {
            id: 'tab-integration',
            title: 'Integrations & Addons',
            icon: 'fa fa-user',
            sub_title: "Qloud As A Lead Magnet",
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            services: [{ title: 'Boost SEO ranking' }, { title: 'Social Sharing' }, { title: 'Marketing' }, { title: 'Retention' }, { title: 'Visual Reviews' }, { title: 'Reviews Generation' }],
            link: '/about-us-1'
        },
        {
            id: 'tab-collaboration',
            title: 'Collaboration',
            icon: 'fa fa-users',
            sub_title: "Explore Use Cases Of Qloud",
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            services: [{ title: 'Boost SEO ranking' }, { title: 'Social Sharing' }, { title: 'Marketing' }, { title: 'Retention' }, { title: 'Visual Reviews' }, { title: 'Reviews Generation' }],
            link: '/about-us-1'
        },
        {
            id: 'tab-monitoring',
            title: 'Monitoring',
            icon: 'fa fa-bar-chart',
            sub_title: "Monitoring",
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            services: [{ title: 'Boost SEO ranking' }, { title: 'Social Sharing' }, { title: 'Marketing' }, { title: 'Retention' }, { title: 'Visual Reviews' }, { title: 'Reviews Generation' }],
            link: '/about-us-1'
        },

    ]);
    return (
        <>
            <section className="iq-host-services">
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape-right" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center  iq-title-box-2'
                                title='Our Best Services'
                                subTitle='Service'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-tabs iq-tab-vertical iq-hosting ">
                                <div className="row ">
                                    <div className="col-lg-4">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            {
                                                List.map((list, index) => (
                                                    <li className="nav-item" key={index}>
                                                        <a className={list.active !== undefined && list.active ? 'active nav-link' : 'test nav-link'} data-toggle="pill" href={'#' + list.id} role="tab">
                                                            <div className="media"><i aria-hidden="true" className="{{ list.icon }}"></i>
                                                                <div className="media-body">
                                                                    <h6 className="tab-title">{list.title}</h6>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="tab-content">
                                            {
                                                List.map((list, index2) => (
                                                    <div className={list.active !== undefined && list.active ? 'tab-pane active' : ' tab-pane test'} id={list.id} role="tabpanel" key={index2}>
                                                        <div>
                                                            <h4 className="mb-3">{list.sub_title}</h4>
                                                            <p>{list.desc}</p>
                                                            <div className="iq-list iq-two-column mb-4">
                                                                <ul className="iq-list-with-icon">
                                                                    {
                                                                        list.services.map((service, index2) => (
                                                                            <li key={index2} ><i className="ion ion-checkmark-round main-color"></i>{service.title}</li>

                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                            <a className="iq-button iq-btn-medium iq-btn-round iq-btn-flat"  >Read More</a>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        </>
    );
}

export default Index
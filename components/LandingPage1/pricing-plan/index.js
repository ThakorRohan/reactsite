import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {
    const [items] = useState([
        {
            title: "Basic",
            description: "It is a long established fact that a reader will be distracted",
            price: "Free",
            plan_desc: "",
            services: [{ title: "Feedback System" }, { title: "Social Integration" }, { title: "Push Notifications " }, { title: "Relevant App Content" }, { title: "Log-in via Social Media " }]
        },
        {
            title: "Premium",
            description: "It is a long established fact that a reader will be distracted",
            price: "$12",
            plan_desc: "/mo",
            active: true,
            services: [{ title: "Feedback System" }, { title: "Social Integration" }, { title: "Push Notifications " }, { title: "Relevant App Content" }, { title: "Log-in via Social Media " }]
        },
        {
            title: "Business",
            description: "It is a long established fact that a reader will be distracted",
            price: "$38",
            plan_desc: "/mo",
            services: [{ title: "Feedback System" }, { title: "Social Integration" }, { title: "Push Notifications " }, { title: "Relevant App Content" }, { title: "Log-in via Social Media " }]
        }
    ]);
    return (
        <>
            <section className="iq-pricing-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Plans & Pricing '
                                subTitle='Pricing' />
                        </div>
                    </div>
                    <div className="row">
                        {
                            items.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className={item.active !== undefined && item.active ? 'iq-price-container iq-price-table-6 text-center iq-box-shadow wow fadeInUp active' : 'iq-price-container iq-price-table-6 text-center iq-box-shadow wow fadeInUp'}  >
                                        <div className="iq-price-header">
                                            <span className="iq-price-label">{item.title}</span>
                                            <h4 className="iq-price">{item.price}<span className="iq-price-desc">{item.plan_desc}</span></h4>
                                            <p className="iq-price-description">{item.description}</p>
                                        </div>
                                        <div className="iq-price-body">
                                            <ul className="iq-price-service">
                                                {
                                                    item.services.map((service, index2) => (
                                                        <li className={service.active !== undefined && service.active ? 'active' : 'inactive'} key={index2}>
                                                            <span>{service.title}</span><i aria-hidden="true" className=""></i>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </div>
                                        <div className="iq-price-footer">
                                            <div className="iq-btn-container">
                                                <a className="iq-button iq-btn-round d-inline" href="#">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                </div >
            </section >

        </>
    );
}

export default Index
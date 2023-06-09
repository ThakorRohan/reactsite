import React, { useEffect } from 'react';
import { index } from '../../../config/plugins';

import TitleSection from '../../qloud/titlesection'
const Index = props => {
    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });
    return (
        <>
            <section className="iq-counter-section pt-0 iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-0 mb-5">
                            <TitleSection
                                className='iq-title-box-2 mb-4'
                                title='We lead and support our customer’s cloud'
                                subTitle='About Us'
                                description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            />
                            <div className="iq-list iq-two-column">
                                <ul className="iq-list-with-icon">
                                    <li><i className="ion ion-checkmark-round"></i>Boost SEO ranking</li>
                                    <li><i className="ion ion-checkmark-round"></i> Social Sharing</li>
                                    <li><i className="ion ion-checkmark-round"></i>Marketing</li>
                                    <li><i className="ion ion-checkmark-round"></i>Retention</li>
                                    <li><i className="ion ion-checkmark-round"></i> Visual Reviews </li>
                                    <li><i className="ion ion-checkmark-round"></i> Reviews Generation</li>
                                </ul>
                            </div>
                            <div className="iq-btn-container mt-4">
                                <a className="iq-button iq-btn-medium iq-btn-round iq-btn-flat d-inline" href="#">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="iq-counter text-center iq-box-shadow iq-counter-style-1">
                                        <div className="counter-content">
                                            <p className="iq-counter-info">
                                                <span className="timer" data-to="50" data-speed="5000">50</span>
                                                <span className="counter-after-content"></span>
                                                <span className="counter-symbol">+</span></p>
                                            <h5 className="counter-title-text">Engineers and  Developers</h5>
                                        </div>
                                    </div>
                                    <div className="iq-counter text-center iq-box-shadow iq-counter-style-1">
                                        <div className="counter-content">
                                            <p className="iq-counter-info">
                                                <span className="timer" data-to="100" data-speed="5000">100</span>
                                                <span className="counter-after-content">k</span>
                                                <span className="counter-symbol">+</span></p>
                                            <h5 className="counter-title-text">Customers</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="iq-counter text-center iq-box-shadow iq-counter-style-1">
                                        <div className="counter-content">
                                            <p className="iq-counter-info">
                                                <span className="timer" data-to="35" data-speed="5000">35</span>
                                                <span className="counter-after-content">m</span>
                                                <span className="counter-symbol">+</span></p>
                                            <h5 className="counter-title-text">Instances Deployed</h5>
                                        </div>
                                    </div>
                                    <div className="iq-counter text-center iq-box-shadow iq-counter-style-1">
                                        <div className="counter-content">
                                            <p className="iq-counter-info">
                                                <span className="timer" data-to="15" data-speed="5000">15</span>
                                                <span className="counter-after-content">m</span>
                                                <span className="counter-symbol">+</span></p>
                                            <h5 className="counter-title-text">Support answers  per month</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Index
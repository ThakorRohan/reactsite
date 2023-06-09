import React, { useEffect } from 'react';
import { index } from '../../../config/plugins';
const Index = props => {
    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });
    return (
        <>
            <section className="iq-fancy-box-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center iq-title-box iq-title-default iq-title-box-2 wow fadeInUp" data-wow-duration="0.6s">
                                <span className="iq-subtitle">Process</span>
                                <h2 className="iq-title">How It's Work</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-md-6 mb-lg-0 mb-5 mt-lg-5">
                            <div className="iq-fancy-box iq-fancy-box-style-1 text-center iq-box-shadow wow fadeInUp" data-wow-duration="0.6s">
                                <div className="iq-img-area">
                                    <img src="../../../assets/images/fancy-box/01.png" className="img-fluid" alt="QLOUD" /> </div>
                                <div className="iq-fancy-box-content">
                                    <h5 className="iq-fancy-title"> Cloud Compute </h5>
                                    <p className="fancy-box-content"> It is a long established fact that a reader will be distracted by the of
                                    readable content at scale on the.
                                    </p>
                                    <div className="iq-btn-container">
                                        <a className="iq-button iq-btn-link has-icon btn-icon-right d-inline" href="#">
                                            Read More<i aria-hidden="true" className="ion ion-ios-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5 mt-lg-5">
                            <div className="iq-fancy-box iq-fancy-box-style-1 text-center iq-box-shadow wow fadeInUp" data-wow-duration="1.2s">
                                <div className="iq-img-area">
                                    <img src="../../../assets/images/fancy-box/02.png" className="img-fluid" alt="QLOUD" /> </div>
                                <div className="iq-fancy-box-content">
                                    <h5 className="iq-fancy-title">Block Storage</h5>
                                    <p className="fancy-box-content"> It is a long established fact that a reader will be distracted by the of
                                    readable content Deploy at scale on the.
                                     </p>
                                    <div className="iq-btn-container">
                                        <a className="iq-button iq-btn-link has-icon btn-icon-right d-inline" href="#">
                                            Read More<i aria-hidden="true" className="ion ion-ios-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-5">
                            <div className="iq-fancy-box iq-fancy-box-style-1 text-center iq-box-shadow wow fadeInUp " data-wow-duration="1.8s">
                                <div className="iq-img-area">
                                    <img src="../../../assets/images/fancy-box/03.png" className="img-fluid" alt="QLOUD" /> </div>
                                <div className="iq-fancy-box-content">
                                    <h5 className="iq-fancy-title">Dedicated Cloud</h5>
                                    <p className="fancy-box-content"> It is a long established fact that a reader will be distracted by the of
                                    readable content Deploy at scale on the.
                                    </p>
                                    <div className="iq-btn-container">
                                        <a className="iq-button iq-btn-link has-icon btn-icon-right d-inline" href="#">
                                            Read More<i aria-hidden="true" className="ion ion-ios-arrow-right"></i>
                                        </a>
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
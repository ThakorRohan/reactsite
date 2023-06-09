import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {

    return (
        <>
            <section className="iq-getstarted">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <TitleSection
                                className='text-left iq-title-box-1'
                                title='Get Started'
                                titleIcon=''
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className=" text-left iq-title-box iq-title-default iq-title-box-1">
                                <h4 className="iq-title">Learn and build </h4>
                                <p className="iq-title-desc">New to GCP? Get started with any GCP products for free with a $300 credit.</p>
                            </div>
                            <div className="iq-btn-container">
                                <a className="iq-button d-inline" href="#">Try Free</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mt-lg-0">
                            <div className=" text-left iq-title-box iq-title-default iq-title-box-1">
                                <h4 className="iq-title">Need more help?</h4>
                                <p className="iq-title-desc">Out Experts will help you build the right solution or find the right partner for your needs.</p>
                            </div>

                            <div className="iq-btn-container d-inline-block mr-4">
                                <a className="iq-button iq-btn-outline d-inline" href="#"> Contact Sales </a>
                            </div>

                            <div className="iq-btn-container d-inline-block">
                                <a className="iq-button iq-btn-outline d-inline" href="#"> Find a partner </a>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        </>
    );
}

export default Index
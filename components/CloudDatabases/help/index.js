import React, { useState } from 'react';

import TitleSection from '../../qloud/titlesection'
const Index = props => {

    return (
        <>
            <section className="blue-bg iq-help">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <TitleSection
                                className='text-left iq-title-white iq-title-box-2 mb-0'
                                title='Let Us Help You Grow'
                                titleIcon=''
                                description='Ready to launch your business to the stratosphere'
                            />
                        </div>
                        <div className="col-lg-6 text-right align-self-center">
                            <div className="iq-btn-container d-inline-block mr-4">
                                <a className="iq-button iq-hover d-inline" href="#">
                                    Start Your Free Trial
                    </a>
                            </div>
                            <div className="iq-btn-container d-inline-block">
                                <a className="iq-button iq-btn-outline d-inline" href="#"> See All Plans</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
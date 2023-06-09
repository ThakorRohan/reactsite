import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {

    return (
        <>
            <section className="blue-bg iq-help">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <TitleSection
                                className='text-left  mb-0 iq-title-white iq-title-box-2'
                                title='Let Us Help You Grow'
                                titleIcon=''
                            />
                        </div>
                        <div className="col-lg-6 text-right align-self-center">
                            <div className="iq-btn-container d-inline-block mr-4">
                                <a className="iq-button iq-hover d-inline" href="#">
                                    Start Your Free Trial
                                </a>
                            </div>
                            <div className="iq-btn-container d-inline-block">
                                <a className="iq-button iq-btn-outline d-inline" href="#"> See All Plans
                                 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
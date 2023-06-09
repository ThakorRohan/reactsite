import React, { useState } from 'react';
import TitleSection from '../../../components/qloud/titlesection'
const Index = props => {

    return (
        <>
            <section >
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape-right" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mb-lg-0 mb-4 wow fadeInLeft">
                            <img src="../../../assets/images/others/08.png" className="img-fluid" alt="qloud" />
                        </div>
                        <div className="col-lg-6 col-sm-12 wow fadeInRight">
                            <TitleSection
                                className='text-left iq-title-box-2'
                                title='Fully Managed Serverless Analytics '
                                subTitle='About Us'
                                description='Seamlessly unlock business insights with Qloud Platform’s fully managed, proven, end-to-end data analytics products. Remove operational complexities of data analytics with a serverless approach and make important business decisions quickly and efficiently.'
                                descclassName='pr-lg-5'
                                titleIcon=''
                            />
                            <div className="iq-btn-container">
                                <a className="iq-button iq-btn-round has-icon btn-icon-right d-inline" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
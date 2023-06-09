import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {

    return (
        <>
            <section>
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape-left" alt="QLOUD" />
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape-right" alt="1" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mb-lg-0 mb-5">
                            <TitleSection
                                className='text-left iq-title-box-2'
                                title='Are you ready for a better, more  productive business?'
                                subTitle='Lets Get Started'
                                titleIcon=''
                                description='The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'
                            />
                            <div className="iq-btn-container">
                                <a className="iq-button iq-btn-round has-icon btn-icon-right d-inline" href="#">Start My Project</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img src="../../../assets/images/others/05.png" className="img-fluid" alt="qloud" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
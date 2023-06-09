import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {
    const [List1] = useState([
        { title: 'Marketing', image: '../../../assets/images/process/01.png', desc: 'There are many variations of passages of readable content page looking' },
        { title: 'Social Services', image: '../../../assets/images/process/03.png', desc: 'There are many variations of passages of readable content page looking' }
    ]);

    const [List2] = useState([
        { title: 'Clean Design', image: '../../../assets/images/process/02.png', desc: 'There are many variations of passages of readable content page looking' },
        { title: 'Creative Ideas', image: '../../../assets/images/process/04.png', desc: 'There are many variations of passages of readable content page looking' }
    ]);
    return (

        <>
            <section className="pt-0 iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-0 mb-5 align-self-center">
                            <TitleSection
                                className='iq-title-box-2'
                                title='We lead and support our customer’s cloud'
                                subTitle='What We Do?'
                                titleIcon=''
                                description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.'
                            />
                            <div className="iq-btn-container mt-4">
                                <a className="iq-button iq-btn-medium iq-btn-round iq-btn-flat d-inline" href="#"> Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">

                                    {
                                        List1.map((list, index) => (
                                            <div className="iq-process iq-process-step-style-1" key={index}>
                                                <div className="iq-process-step">
                                                    <div className="iq-step-content">
                                                        <img className="hover-img img-fluid" src={list.image} alt="fancybox" />
                                                    </div>
                                                    <div className="iq-step-text-area">
                                                        <h4 className="iq-step-title">{list.title}</h4>
                                                        <span className="iq-step-desc">{list.desc}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    {
                                        List2.map((list, index1) => (
                                            <div className="iq-process iq-process-step-style-1" key={index1}>
                                                <div className="iq-process-step">
                                                    <div className="iq-step-content">
                                                        <img className="hover-img img-fluid" src={list.image} alt="fancybox" />
                                                    </div>
                                                    <div className="iq-step-text-area">
                                                        <h4 className="iq-step-title">{list.title}</h4>
                                                        <span className="iq-step-desc">{list.desc}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

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
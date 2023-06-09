import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {
    const [List1] = useState([
        { title: 'Marketing', symbol: '', value: 61 },
        { title: 'Network edge location', symbol: '', value: 134 },
        { title: 'Customer', symbol: '+', value: 200 }
    ]);
    const [List2] = useState([
        { title: 'Marketing', image: '../../../assets/images/process/01.png', desc: 'There are many variations of passages of readable content page looking' },
        { title: 'Social Services', image: '../../../assets/images/process/03.png', desc: 'There are many variations of passages of readable content page looking' },
    ]);
    const [List3] = useState([
        { title: 'Clean Design', image: '../../../assets/images/process/02.png', desc: 'There are many variations of passages of readable content page looking' },
        { title: 'Creative Ideas', image: '../../../assets/images/process/03.png', desc: 'There are many variations of passages of readable content page looking' }
    ]);
    return (
        <>
            <section className="iq-pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-0 mb-5 align-self-center wow fadeInUp" data-wow-delay="0.4s">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <TitleSection
                                        className='text-left iq-title-box-2'
                                        title='Why Google Cloud'
                                        subTitle='Why Choose'
                                        titleIcon=''
                                        description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has. '
                                    />
                                </div>
                            </div>
                            <div className="row">
                                {
                                    List1.map((list, index) => (
                                        <div className="col-lg-3 col-md-3 col-sm-12" key={index}>
                                            <div className="iq-counter">
                                                <div className="counter-content">
                                                    <p className="iq-counter-info">
                                                        <span className="timer" data-to={list.value}></span>
                                                        <span className="counter-after-content"></span>
                                                        <span className="counter-symbol">{list.symbol}</span></p>
                                                    <p className="counter-content-text">{list.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="iq-btn-container mt-4">
                                <a className="iq-button iq-btn-medium iq-btn-round iq-btn-flat d-inline"
                                >Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.4s">
                                    {
                                        List2.map((list, index2) => (
                                            <div className="iq-process iq-process-step-style-1 " key={index2}>
                                                <div className="iq-process-step">
                                                    <div className="iq-step-content">
                                                        <img className="hover-img img-fluid" src={ list.image } alt="fancybox" />
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
                                <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.6s">
                                    {
                                        List3.map((list, index2) => (
                                            <div className="iq-process iq-process-step-style-1 " key={index2}>
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
                    </div >
                </div >
            </section >
        </>
    );
}

export default Index
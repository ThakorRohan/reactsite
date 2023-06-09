import React, { useState } from 'react';
const Index = props => {
    const [List] = useState([
        { name: 'JD Scot', design: 'Designer, Qloud', desc: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
        { name: 'Fitt Morgan', design: 'Designer, Qloud', desc: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown.' },
        { name: 'Nik Jorden', design: 'Designer, Qloud', desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley .' },
        { name: 'Julia Cooper', design: 'Designer, Qloud', desc: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.' },
    ]);
    return (
        <>
            <section className="light-gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12 align-self-center mb-4 mb-lg-0">
                            <div className="iq-testimonial text-center iq-testimonial-3">
                                <div className="owl-carousel" data-dots="false" data-nav="false" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="60" >
                                    {
                                        List.map((list, index) => (
                                            <div className="iq-testimonial-info" key={index}>
                                                <div className="iq-testimonial-content">
                                                    <p>{list.desc}</p>
                                                </div>
                                                <div className="iq-testimonial-member">
                                                    <div className="avtar-name">
                                                        <div className="iq-lead">{list.name}</div>
                                                        <span className="iq-post-meta">{list.design}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <div className="about-analytics">
                                <img src="../../../assets/images/client/c4.png" className="attachment-large img-fluid size-large" alt="client" />
                                <h4 className="mb-3">About Qloud</h4>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. </p>
                                <h5 className="mb-3 mt-3">Industries : <span>Retail &amp; Consumer Goods</span></h5>
                                <h5>Location : <span>United Kingdom</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
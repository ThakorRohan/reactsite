import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {
    const [Image1] = useState([
        { image: '../../../assets/images/client/c-a1.png' },
        { image: '../../../assets/images/client/c-a3.png' },
        { image: '../../../assets/images/client/c-a5.png' },
    ]);
    const [Image2] = useState([
        { image: '../../../assets/images/client/c-a2.png' },
        { image: '../../../assets/images/client/c-a4.png' },
        { image: '../../../assets/images/client/c-a6.png' },
    ]);
    const [List] = useState([
        { name: 'JD Scot', image: '../../../assets/images/testimonial/01.png', design: 'Designer, Qloud', desc: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
        { name: 'Fitt Morgan', image: '../../../assets/images/testimonial/02.png', design: 'Designer, Qloud', desc: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown.' },
        { name: 'Nik Jorden', image: '../../../assets/images/testimonial/03.png', design: 'Designer, Qloud', desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley .' },
        { name: 'Julia Cooper', image: '../../../assets/images/testimonial/04.png', design: 'Designer, Qloud', desc: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.' },
    ]);
    return (
        <>
            <section className="pt-0">
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape-right" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title=' Used by forward-thinking businesses'
                                subTitle='Businesses'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 mb-lg-0 mb-5 align-self-center">
                            <div className="row">
                                <div className="col-lg-6 text-center">
                                    {
                                        Image1.map((list, index) => (
                                            <img src={list.image} className="img-fluid mb-4" alt="client-img" key={index} />

                                        ))
                                    }
                                </div>
                                <div className="col-lg-6 text-center">
                                    {
                                        Image2.map((list, index1) => (
                                            <img src={list.image} className="img-fluid mb-4" alt="client-img" key={index1} />
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-sm-12 align-self-center">
                            <div className="iq-testimonial text-left iq-testimonial-3 iq-data-testimonial">
                                <div className="owl-carousel" data-dots="true" data-nav="false" data-items="1" data-items-laptop="1"
                                    data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true"
                                    data-loop="true" data-margin="30">
                                    {
                                        List.map((list, index2) => (
                                            <div className="iq-testimonial-info" key={index2}>
                                                <div className="iq-testimonial-avtar">
                                                    <img alt="image-testimonial" className="img-fluid center-block"
                                                        src={list.image} />
                                                </div>
                                                <div className="iq-testimonial-content">
                                                    <p className="pr-lg-4">{list.desc}</p>
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

                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
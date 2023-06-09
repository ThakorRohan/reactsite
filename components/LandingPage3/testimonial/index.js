import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {
    const [List] = useState([
        {
            name: 'JD Scot',
            design: 'Designer, Qloud',
            image: '../../../assets/images/testimonial/01.png',
            desc: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text typesetting over the ever since the 1500s, when an unknown dummy text printer took a galley.'
        },
        {
            name: 'Haris Morgan',
            design: 'Designer, Qloud',
            image: '../../../assets/images/testimonial/02.png',
            desc: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever over the since the 1500s, when an unknown printer took a galley dummy text of type and scrambled.'
        },
        {
            name: 'Nik Jorden',
            design: 'Designer, Qloud',
            image: '../../../assets/images/testimonial/03.png',
            desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text over the ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
        },
        {
            name: 'Rinks Cooper',
            design: 'Designer, Qloud',
            image: '../../../assets/images/testimonial/01.png',
            desc: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown dummy text printer.'
        }
    ])
    return (
        <>

            <section className="iq-testimonial-section light-gray-bg ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 align-self-center">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='100+ Companies are using Qloud'
                                subTitle='Testimonial'
                                titleIcon=''
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 align-self-center">
                            <div className="iq-testimonial text-center iq-testimonial-7">
                                <div className="owl-carousel" data-dots="false" data-nav="false" data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                    {
                                        List.map((list, index) => (
                                            <div className="iq-testimonial-info" key={index}>
                                                <div className="iq-testimonial-content">
                                                    <p>{list.desc}</p>
                                                    <div className="iq-testimonial-avtar">
                                                        <img alt="image-testimonial" className="img-fluid center-block" src={list.image} />
                                                    </div>
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
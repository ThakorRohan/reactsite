import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {
    const [Languages] = useState([
        { title: 'Public Cloud' },
        { title: 'Private Cloud' },
        { title: 'Virtual Private Cloud' },
        { title: 'Tally-as-a-Service' },
        { title: 'Banking Community Cloud' },
        { title: 'Load Balancing' }
    ]);
    return (
        <>
            <section className="main-bg" style={{ backgroundImage: '../../../assets/images/others/06.jpg', backgroundAttachment: "fixed", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-0 mb-5">
                            <TitleSection
                                className='iq-title-box-2'
                                title='Work with the language you already love'
                                subTitle='Language'
                                description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.'
                                titleclassName='text-white'
                                descclassName='text-white'
                            />
                            <div className="iq-list  iq-two-column">
                                <ul className="iq-list-with-icon">
                                    {
                                        Languages.map((language, index) => (
                                            <li className="text-white" key={index}><i className="ion ion-checkmark-round"></i>{language.title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="iq-btn-container mt-4">
                                <a className="iq-button iq-btn-medium iq-btn-round iq-btn-flat d-inline" href="#">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-stretch align-self-center">
                            <div className="iq-popup-video">
                                <div className="iq-video-img position-relative">
                                    <div className="iq-video-icon wow FadeIn">
                                        <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" className="iq-video popup-youtube"><i aria-hidden="true" className="ion ion-play"></i> </a>
                                        <div className="iq-waves">
                                            <div className="waves wave-1"></div>
                                            <div className="waves wave-2"></div>
                                            <div className="waves wave-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Index
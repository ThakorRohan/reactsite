import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {
    const [Sliders] = useState([
        {
            id: 'Google-Cloud-Platform',
            title: 'Google Cloud Platform',
            desc: 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
            link: '#',
            image: '../../../assets/images/security/01.png'
        },
        {
            id: 'docker',
            title: 'Docker',
            desc: 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
            link: '#',
            image: '../../../assets/images/security/02.png',
        },
        {
            id: 'kubernetes',
            title: 'Kubernetes',
            desc: 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
            link: '#',
            image: '../../../assets/images/security/03.png'
        },
        {
            id: 'Openshift',
            title: 'Red Hat OpenShift',
            desc: 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
            link: '#',
            image: '../../../assets/images/security/04.png'
        },
        {
            id: 'AWS-2',
            title: 'Amazon Web Services',
            desc: 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
            link: '#',
            image: 'assets/images/security/05.png'
        },
        {
            id: 'azure',
            title: 'Microsoft Azure',
            desc: 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
            link: '#',
            image: 'assets/images/security/06.png'
        },
        {
            id: 'unnamed-11-2',
            title: 'Mesosphere',
            desc: 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
            link: '#',
            image: '../../../assets/images/security/07.png'
        }
    ]);

    return (
        <>
            <section className="pt-0">
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape-left" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center mb-0 iq-title-box-2'
                                title='Security for any App, any Platform, any Cloud'
                                subTitle='Security'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-slider-with-text text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <ul className="slider slider-nav center">
                                                {
                                                    Sliders.map((slider, index) => (
                                                        <li className="iq-slider-nav" key={index}>
                                                            <img src={slider.image} className="img-fluid" title={slider.id} alt="QLOUD" />
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="slider slider-for center">
                                                {
                                                    Sliders.map((slider, index1) => (
                                                        <div className="slider-text" key={index1}>
                                                            <h4 className="slider-title">{slider.title}</h4>
                                                            <p className="slider-desc">{slider.desc}</p>
                                                            <div className="iq-btn-container">
                                                                <a href={slider.link} className="iq-button iq-btn-link has-icon btn-icon-right" style={{ color: "#007BFC" }}>
                                                                    Read More<i aria-hidden="true" className="ion ion-ios-arrow-forward"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                            </div>
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
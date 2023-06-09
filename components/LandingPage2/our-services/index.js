import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {
    const [List] = useState([
        {
            title: 'Add-ons',
            image: '../../assets/images/fancy-list/01.png',
            services: [{ title: 'Advance Advisory Team' }, { title: 'Professional Services' }],
            desc: ' It is a long established fact that a reader will be distracted by the.'
        },
        {
            title: 'Add-ons',
            image: '../../assets/images/fancy-list/02.png',
            services: [{ title: 'Advance Advisory Team' }, { title: 'Professional Services' }],
            desc: ' It is a long established fact that a reader will be distracted by the.'
        },
        {
            title: 'Static Sites',
            image: '../../assets/images/fancy-list/03.png',
            services: [{ title: 'Advance Advisory Team' }, { title: 'Professional Services' }],
            desc: ' It is a long established fact that a reader will be distracted by the.'
        },
        {
            title: 'Data Clips ',
            image: '../../assets/images/fancy-list/04.png',
            services: [{ title: 'Advance Advisory Team' }, { title: 'Professional Services' }],
            desc: ' It is a long established fact that a reader will be distracted by the.'
        },
        {
            title: 'Data Rollback',
            image: '../../assets/images/fancy-list/05.png',
            services: [{ title: 'Advance Advisory Team' }, { title: 'Professional Services' }],
            desc: ' It is a long established fact that a reader will be distracted by the.'
        },
        {
            title: 'App Metrics',
            image: '../../assets/images/fancy-list/06.png',
            services: [{ title: 'Advance Advisory Team' }, { title: 'Professional Services' }],
            desc: ' It is a long established fact that a reader will be distracted by the.'
        }
    ]);
    return (
        <>
            <section className="iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='A powerful and innovative feature set'
                                subTitle='Our services'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="iq-fancy-box-list iq-fancy-box-list-1  text-left iq-shadow">
                                        <div className="iq-fancy-box-content">
                                            <div className="iq-img-area">
                                                <img src={list.image} className="img-fluid" alt="QLOUD" />
                                            </div>
                                            <div className="iq-fancy-details">
                                                <h4 className="iq-fancy-title"> {list.title}</h4>
                                                <div className="special-content">
                                                    <p className="fancy-box-content"> {list.desc}</p>
                                                </div>
                                                <div className="iq-list iq-one-column">
                                                    <ul className="iq-list-with-icon">
                                                        {
                                                            list.services.map((service, index2) => (
                                                                <li key={index2} ><i className="ion ion-android-checkbox-outline"></i>{service.title}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section >

        </>
    );
}

export default Index
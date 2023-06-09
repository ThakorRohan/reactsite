import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'

const Index = props => {
    const [List] = useState([
        { title: 'Cloud Compute', image: '../../../../assets/images/fancy-box/01.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content deploy at scale on the.' },
        { title: 'Block Storage', image: '../../../../assets/images/fancy-box/02.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content deploy at scale on the.' },
        { title: 'Dedicated Cloud', image: '../../../../assets/images/fancy-box/03.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content deploy at scale on the.' }
    ]);
    return (
        <>
            <section className="iq-fancy-box-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2 wow fadeInUp'
                                title='How It Work'
                                subTitle='Process'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className={index < List.length - 1 ? ' col-lg-4 col-md-6 mt-lg-5 mb-lg-0 mb-5 ' : 'col-lg-4 col-md-6 mt-lg-5'} key={index}>
                                    <div className="iq-fancy-box iq-fancy-box-style-1 text-center iq-box-shadow wow fadeInUp" data-wow-duration="0.6s">
                                        <div className="iq-img-area">
                                            <img src={list.image} className="img-fluid" alt="QLOUD" />
                                        </div>
                                        <div className="iq-fancy-box-content">
                                            <h5 className="iq-fancy-title"> {list.title}  </h5>
                                            <p className="fancy-box-content">{list.desc}</p>
                                            <div className="iq-btn-container">
                                                <a className="iq-button iq-btn-link has-icon btn-icon-right d-inline" href="#">Read More<i aria-hidden="true" className="ion ion-ios-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

        </>
    );
}

export default Index
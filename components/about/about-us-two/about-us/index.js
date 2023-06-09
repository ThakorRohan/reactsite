import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'
const Index = props => {
    const [List1] = useState([
        { title: 'FAQ', image: '../../../../assets/images/icon-box/07.png', link: '#' },
        { title: 'Server Status', image: '../../../../assets/images/icon-box/08.png', link: '#' }
    ]);
    const [List2] = useState([
        { title: 'Documentation', image: '../../../../assets/images/icon-box/09.png', link: '#' },
        { title: 'APIs', image: '../../../../assets/images/icon-box/07.png', link: '#' }
    ]);
    return (
        <>
            <section className="iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2 wow fadeInUp'
                                title='Insights & resources'
                                subTitle='About Us'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-12 mb-lg-0 mb-4">
                            <div className="row">
                                {
                                    List1.map((list, index) => (
                                        <div className="col-lg-12 col-md-6" key={index}>
                                            <div className="iq-icon-box iq-icon-box-style-8  text-center  wow fadeInLeft">
                                                <div className="icon-box-img">
                                                    <img src={list.image} className="img-fluid mb-3" alt="qloud" /> </div>
                                                <div className="icon-box-content">
                                                    <h5 className="icon-box-title"> <a href={list.link}>{list.title}</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mb-lg-0 mb-4">
                            <div className="iq-fancy-box iq-resorces  text-left active wow fadeInUp ">
                                <div className="iq-fancy-box-content">
                                    <div className="iq-img-area">
                                        <img src="../../../../assets/images/others/04.png" className="img-fluid" title="img1" alt="qloud" /> </div>
                                    <div className="media-body">
                                        <h5 className="iq-fancy-title"> Increase Performance With Balancers</h5>
                                        <p className="fancy-box-content mb-0"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="row">
                                {
                                    List2.map((list, index2) => (
                                        <div className="col-lg-12 col-md-6" key={index2}>
                                            <div className="iq-icon-box iq-icon-box-style-8  text-center  wow fadeInRight">
                                                <div className="icon-box-img">
                                                    <img src={list.image} className="img-fluid mb-3" alt="qloud" /> </div>
                                                <div className="icon-box-content">
                                                    <h5 className="icon-box-title"> <a href={list.link}>{list.title}</a> </h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
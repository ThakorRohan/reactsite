import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {

    const [List1] = useState([
        { title: 'Marketing', image: '../../../assets/images/icon-box/13.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { title: 'Social Services', image: '../../../assets/images/icon-box/03.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    ]);
    const [List2] = useState([
        { title: 'Clean Design', image: '../../../assets/images/icon-box/14.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { title: 'Creative Ideas', image: '../../../assets/images/icon-box/16.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    ]);
    return (
        <>
            <section className="iq-pb-70">
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape-right" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 align-self-center mb-5 mb-lg-0 wow fadeInUp" data-wow-delay="0.2s">
                            <TitleSection
                                className='text-left iq-title-box-2'
                                title='Big DataGuides and Resources'
                                subTitle='Resources'
                                titleIcon=''
                                description='Seamlessly unlock business insights with Qloud Platform’s fully managed, proven,end-to-end data analytics products. Remove operational complexities of data analytics with a serverless approach and make important business decisions quickly and efficiently.'
                            />
                            <div className="iq-btn-container">
                                <a className="iq-button iq-btn-round has-icon btn-icon-right d-inline" >
                                    Read More<i className="fa fa-file-o" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <div className="row">
                                {
                                    List1.map((list, index) => (
                                        <div className="col-lg-6 col-md-6" key={index}>
                                            <div className="iq-icon-box iq-icon-box-style-8  wow fadeInUp" data-wow-delay="0.2s">
                                                <div className="icon-box-img">
                                                    <img src={list.image} className="img-fluid" alt="qloud" />
                                                </div>
                                                <div className="icon-box-content">
                                                    <h5 className="icon-box-title"><a href="#">{list.title}</a></h5>
                                                    <p className="icon-box-desc">{list.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>

                            <div className="row">
                                {
                                    List2.map((list, index1) => (
                                        <div className="col-lg-6 col-md-6" key={index1}>
                                            <div className="iq-icon-box iq-icon-box-style-8  wow fadeInUp" data-wow-delay="0.6s">
                                                <div className="icon-box-img">
                                                    <img src={list.image} className="img-fluid" alt="qloud" />
                                                </div>
                                                <div className="icon-box-content">
                                                    <h5 className="icon-box-title"><a href="#">{list.title}</a></h5>
                                                    <p className="icon-box-desc">{list.desc}</p>
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
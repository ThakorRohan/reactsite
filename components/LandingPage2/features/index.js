import React, { useState } from 'react';

const Index = props => {
    const [List] = useState([
        { title: 'Select a service type', 'images': '../../../assets/images/work/01.png', 'arrow': '../../../assets/images/arrow/01.png', 'desc': 'It is a long established fact that a  freader will be distracted by the.' },
        { title: 'Deploy in seconds', 'images': '../../../assets/images/work/02.png', 'arrow': '../../../assets/images/arrow/01.png', 'desc': 'It is a long established fact that a  freader will be distracted by the.' },
        { title: 'Update automaticall', 'images': '../../../assets/images/work/03.png', 'arrow': '', 'desc': 'It is a long established fact that a  freader will be distracted by the.' }
    ]);
    return (
        <>
            <section className="iq-fancy-box-section">
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape-left" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center iq-title-box iq-title-default iq-title-box-2 wow fadeInUp" data-wow-duration="0.6s">
                                <span className="iq-subtitle">How It's Work</span>
                                <h2 className="iq-title">Instant Deploys For All Your Apps</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className={index < List.length - 1 ? 'col-lg-4 mb-lg-0 mb-5' : 'col-lg-4'} key={index}>
                                    <div className="iq-process iq-process-step-style-6 text-center wow fadeInUp" data-wow-duration="0.6s">
                                        <div className="iq-process-step">
                                            {
                                                list.arrow && list.arrow !== undefined ? (<img className="iq-before-img img-fluid" src={list.arrow} alt="arrow-img" />)
                                                    : (<div></div>)
                                            }

                                            <div className="iq-step-content">
                                                <img className="hover-img img-fluid" src={list.images} alt="fancybox" />
                                            </div>
                                            <div className="iq-step-text-area">
                                                <h4 className="iq-step-title mt-3 mb-3">{list.title}</h4>
                                                <span className="iq-step-desc">{list.desc}</span>
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
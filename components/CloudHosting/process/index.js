import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'


const Index = props => {
    const [List] = useState([
        { title: 'Connect your cloud', image: '../../../assets/images/process/04.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.' },
        { title: 'Choose a name', image: '../../../assets/images/process/02.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.' },
        { title: 'Deploy your content', image: '../../../assets/images/process/03.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.' }
    ]);
    return (
        <>
            <section className="pt-0 iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 wow fadeInUp">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Host your files in just a minute'
                                subTitle='Process'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.2s" key={index}>
                                    <div className="iq-process iq-process-step-style-3 text-center">
                                        <div className="iq-process-step">
                                            <div className="iq-step-content">
                                                <div className="step-number">
                                                    <span>{index + 1}</span>
                                                    <div className="step_icon">
                                                        <img className="hover-img img-fluid" src={list.image} alt="fancybox" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="iq-step-text-area">
                                                <h4 className="iq-step-title">{list.title}</h4>
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
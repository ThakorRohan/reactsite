import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {
    const [List] = useState([
        { title: 'Cloud Platform', image: '../../../assets/images/icon-box/19.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.' },
        { title: 'Cloud Professionals', image: '../../../assets/images/icon-box/17.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.' },
        { title: 'Compute Engine tutorials', image: '../../../assets/images/icon-box/20.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.' }
    ]);
    return (
        <>
            <section className="iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Compute Guides and Resources'
                                subTitle='Resources'
                                titleIcon=''
                            />
                        </div>
                        <div className="row">
                            {
                                List.map((list, index) => (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="iq-icon-box iq-icon-box-style-4 text-center wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="icon-box-img">
                                                <img src={list.image} className="img-fluid" alt="Qloud" />
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
            </section>

        </>
    );
}

export default Index
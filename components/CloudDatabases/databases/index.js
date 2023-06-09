import React, { useState } from 'react';

import TitleSection from '../../qloud/titlesection'

const Index = props => {
    const [List] = useState([
        { title: 'Flexible performance and scale', image: '../../../assets/images/icon-box/01.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content.' },
        { title: 'Broad open-source compatibility', image: '../../../assets/images/icon-box/02.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content.' },
        { title: 'Do more with your data with Analytics', image: '../../../assets/images/icon-box/03.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content.' }
    ]);
    return (
        <>
            <section className="iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <TitleSection

                                className='text-center iq-title-box-2'
                                title='Cloud Databases'
                                subTitle='Databases'
                                titleIcon='' />
                        </div>
                    </div>
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="0.2s" key={index}>
                                    <div className="iq-icon-box iq-icon-box-style-1">
                                        <div className="icon-box-img">
                                            <img src={list.image} className="img-fluid" alt="QLOUD" />
                                        </div>
                                        <div className="icon-box-content">
                                            <h5 className="icon-box-title"> <a href="#">{list.title}</a></h5>
                                            <p className="icon-box-desc">{list.desc}</p>
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
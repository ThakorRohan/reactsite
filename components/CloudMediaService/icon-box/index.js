import React, { useState } from 'react';
const Index = props => {
    const [List] = useState([
        { title: 'Streamlined Content  Production', image: '../../../assets/images/icon-box/17.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.' },
        { title: 'Smarter Content  Management', image: '../../../assets/images/icon-box/18.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.' },
        { title: 'Global Content Delivery', image: '../../../assets/images/icon-box/19.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.' },
        { title: 'Personalized  Experiences', image: '../../../assets/images/icon-box/20.png', desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page.' }
    ]);
    return (
        <>
            <section className="pt-0 wow fadeInUp iq-pb-70" data-wow-duration="0.6s">
                <div className="container">
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-12 " key={index}>
                                    <div className="iq-icon-box iq-icon-box-style-4   text-left">
                                        <div className="icon-box-img">
                                            <img src={list.image} className="img-fluid" alt="01.png" />
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
            </section>

        </>
    );
}

export default Index
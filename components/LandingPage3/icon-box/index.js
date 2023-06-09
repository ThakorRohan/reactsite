import React, { useState } from 'react';
const Index = props => {
    const [List] = useState([
        { title: 'Highest Gartner MQ', 'images': '../../../assets/images/icon-box/07.png', 'desc': 'It is a long established fact that a reader will be distracted.' },
        { title: 'Protect Data Cloud', 'images': '../../../assets/images/icon-box/08.png', 'desc': 'It is a long established fact that a reader will be distracted.' },
        { title: 'Over 3 Million Users', 'images': '../../../assets/images/icon-box/09.png', 'desc': 'It is a long established fact that a reader will be distracted.' }
    ]);
    return (
        <>
            <section className="icon-box-top pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div key={index} className={index < List.length - 1 ? 'col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-5' : 'col-lg-4 col-md-6 col-sm-12'}>
                                    <div className="iq-icon-box iq-icon-box-style-2 active wow fadeInUp">
                                        <div className="icon-box-img">
                                            <img src={list.images} className="img-fluid" alt="qloud" />
                                        </div>
                                        <div className="icon-box-content">
                                            <h5 className="icon-box-title"> <a href="#">{list.title}</a></h5>
                                            <p className="icon-box-desc"> {list.desc}</p>
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
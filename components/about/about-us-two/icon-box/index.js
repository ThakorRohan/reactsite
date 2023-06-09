import React, { useState } from 'react';
const Index = props => {
    const [items] = useState([
        {
            title: "Geographic Footprint",
            description: "It is a long established fact that a reader will be distracted by the of readable content.",
            image: "../../../assets/images/icon-box/01.png",
            href: "#"
        },
        {
            title: "One Click  Apps",
            description: "It is a long established fact that a reader will be distracted by the of readable content.",
            image: "../../../assets/images/icon-box/02.png",
            href: "#"
        },
        {
            title: "Full Resource Control",
            description: "It is a long established fact that a reader will be distracted by the of readable content.",
            image: "../../../assets/images/icon-box/03.png",
            href: "#"
        },
        {
            title: "Upload ISO / Mount ISO",
            description: "It is a long established fact that a reader will be distracted by the of readable content.",
            image: "../../../assets/images/icon-box/04.png",
            href: "#"
        },
        {
            title: "Linux, Windows and BSD",
            description: "It is a long established fact that a reader will be distracted by the of readable content.",
            image: "../../../assets/images/icon-box/05.png",
            href: "#"
        },
        {
            title: "No Long Term Contracts",
            description: "It is a long established fact that a reader will be distracted by the of readable content.",
            image: "../../../assets/images/icon-box/06.png",
            href: "#"
        }
    ]);
    return (
        <>
            <section className="wow fadeInUp pt-0 iq-pb-70" data-wow-duration="0.6s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center iq-title-box iq-title-default iq-title-box-2">

                                <span className="iq-subtitle">Our key</span>
                                <h2 className="iq-title">Our key differentiators </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            items.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="iq-icon-box iq-icon-box-style-1">
                                        <div className="icon-box-img">
                                            <img src={item.image} className="img-fluid" alt="QLOUD" />
                                        </div>
                                        <div className="icon-box-content">
                                            <h5 className="icon-box-title"> <a href={item.href}>{item.title}</a></h5>
                                            <p className="icon-box-desc">{item.description}</p>
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
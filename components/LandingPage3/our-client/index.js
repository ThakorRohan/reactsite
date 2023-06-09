import React, { useState } from 'react';
const Index = props => {
    const [Images] = useState([
        { image: '../../../assets/images/client/01.png' },
        { image: '../../../assets/images/client/02.png' },
        { image: '../../../assets/images/client/03.png' },
        { image: '../../../assets/images/client/04.png' },
        { image: '../../../assets/images/client/05.png' },
        { image: '../../../assets/images/client/06.png' }
    ]);
    return (
        <>
            <section className="iq-client-section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 align-self-center">
                            <div className="iq-client iq-client-style-1  iq-has-shadow iq-has-grascale">

                                <ul className="iq-client-col-3 iq-client-grid">
                                    {
                                        Images.map((image, index) => (
                                            <li key={index}>
                                                <img src={image.image} className="img-fluid" alt="client-img" />
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 align-self-center mt-5 mt-lg-0">
                            <div className="client-box">
                                <div className=" text-left iq-title-box iq-title-white iq-title-box-1">
                                    <span className="iq-subtitle">Our Clients</span>
                                    <h4 className="iq-title">We have the<br /> Privilege of working<br /> with exceptional<br /> customers.</h4>
                                </div>
                                <div className="iq-btn-container">
                                    <a className="iq-button iq-btn-round d-inline" href="#"> View More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
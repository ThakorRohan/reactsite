import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {

    return (
        <>
            <section className="pt-0 wow fadeInUp" data-wow-duration="0.6s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Cloud Database Options'
                                subTitle='Options'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-db-options">
                                <ul className="list-type">
                                    <li className="type-1">
                                        <div className="d-inline-block iq-heading ">
                                            <p className="heading-title mb-0">Database Type</p>
                                        </div>
                                        <div className="d-inline-block iq-heading">
                                            <p className="heading-title mb-0">COMMON USES</p>
                                        </div>
                                        <div className="d-inline-block iq-heading">
                                            <p className="heading-title mb-0">GCP PRODUCT</p>
                                        </div>
                                        <div className="d-inline-block  iq-heading iq-res">
                                            <p className="heading-title mb-0">SAMPLE CUSTOMERS</p>
                                        </div>
                                    </li>
                                    <li className="type-1 iq-rela">
                                        <div className="d-inline-block iq-heading mt-2">
                                            <p className="heading-title iq-title mb-0">Relational</p>
                                        </div>
                                        <div className="d-inline-block iq-heading">
                                            <div>
                                                Compatibility<br />
                                                    Transactions<br />
                                                        Complex Queries<br />
                                                            Joins
                                </div>
                                        </div>
                                        <div className="d-inline-block iq-heading">
                                            <div className="elementor-text-editor elementor-clearfix">
                                                <a href="#">Cloud SQL</a><br />
                                                <a href="#">Cloud Spanner</a>
                                            </div>
                                        </div>
                                        <div className="d-inline-block iq-heading iq-image">
                                            <img src="../../../assets/images/client/c1.png" className="img-fluid" alt="client-img" />
                                            <img src="../../../assets/images/client/c-a5.png" className="img-fluid" alt="client-img" />
                                        </div>
                                    </li>
                                    <li className="type-1 iq-rela">
                                        <div className="d-inline-block iq-heading mt-2">
                                            <p className="heading-title iq-title mb-0">NoSQL/Nonrelational</p>
                                        </div>
                                        <div className="d-inline-block iq-heading">
                                            <div>Time Series<br />Streaming<br />Mobile <br />Web<br />IoT<br /> Offline sync<br />Caching<br />Low Latency
                                        </div>
                                        </div>
                                        <div className="d-inline-block iq-heading">
                                            <div>
                                                <a href="#">Cloud Bigtable Cloud</a><br />
                                                <a href="#">FireStore Firebase Realtime</a><br />
                                                <a href="#">Database Cloud</a><br />
                                                <a href="#">Memorystore</a>
                                            </div>
                                        </div>
                                        <div className="d-inline-block  iq-heading iq-image">
                                            <img src="../../../assets/images/client/c4.png" className="img-fluid" alt="client-img" />
                                            <img src="../../../assets/images/client/c5.png" className="img-fluid" alt="client-img" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
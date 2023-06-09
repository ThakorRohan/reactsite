import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'

const Index = props => {

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <img src="../../../../assets/images/others/02.png" className="img-fluid" alt="qloud" />
                        </div>
                        <div className="col-lg-6 col-sm-12 mb-lg-0 mb-5">
                            <TitleSection className='iq-title-box-2'
                                className='text-left iq-title-box-1'
                                title='Dignissimos wisi cillum'
                                description='There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by injected humour,
    or randomised words which don’t look even slightly believable. If you are going to use a passage of
    Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
    layout.'
                                titleIcon='' />
                            <ul className="job-details d-inline-block p-0">
                                <li className="list-unstyled">
                                    <h5 className="deatils d-inline-block">Client :</h5>
                                    <span className="pl-3">Qloud</span>
                                </li>
                                <li className="list-unstyled">
                                    <h5 className="deatils d-inline-block">Website :</h5>
                                    <span className="pl-3">Qlouddummy.com</span>
                                </li>
                            </ul>
                            <ul className="job-details d-inline-block ml-lg-5 p-0">
                                <li className="list-unstyled">
                                    <h5 className="deatils d-inline-block">Date :</h5>
                                    <span className="pl-3">01 january 2019</span>
                                </li>
                                <li className="list-unstyled">
                                    <h5 className="deatils d-inline-block">Category :</h5>
                                    <span className="pl-3">Business</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index
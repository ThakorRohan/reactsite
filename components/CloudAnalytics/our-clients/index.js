import React, { useState } from 'react';
import TitleSection from '../../../components/qloud/titlesection'
const Index = props => {
    const [Images] = useState([
        { image: '../../../../assets/images/client/c1-1.png' },
        { image: '../../../../assets/images/client/c1-2.png' },
        { image: '../../../../assets/images/client/c1-3.png' },
        { image: '../../../../assets/images/client/c1-4.png' },
        { image: '../../../../assets/images/client/c1-5.png' },
        { image: '../../../../assets/images/client/c1-6.png' },
        { image: '../../../../assets/images/client/c1-7.png' },
        { image: '../../../../assets/images/client/c1-8.png' },
        { image: '../../../../assets/images/client/c1-9.png' },
        { image: '../../../../assets/images/client/c1-10.png' },
        { image: '../../../../assets/images/client/c1-11.png' },
        { image: '../../../../assets/images/client/c1-12.png' }
    ]);
    return (
        <>
            <section className="blue-bg iq-analytics-clients">
                <img src="../../../../assets/images/others/shape1.png" className="img-fluid shape-right" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 align-self-center mb-4 mb-lg-0">
                            <TitleSection
                                className='text-left iq-title-box-2  iq-title-white'
                                title='Free until you are ready'
                                titleIcon=''
                                description='Build your site for free and take as long as you need. (That’s right, no trial here.) just add a site plan and custom domain when you’re ready for the world.'
                            />
                            <div className="iq-btn-container">
                                <a className="iq-button d-inline" href="#">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <div className=" text-left iq-title-box iq-title-white iq-title-box-2">
                                <h6 className="iq-title ml-lg-5">Transforming the design process At</h6>
                            </div>
                            <div className="iq-client iq-client-style-1 ">
                                <ul className="iq-client-col-4 iq-client-grid">
                                    {
                                        Images.map((list, index) => (
                                            <li key={index}>
                                                <img src={list.image} className="img-fluid" alt="client-img" />
                                            </li>
                                        ))
                                    }

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
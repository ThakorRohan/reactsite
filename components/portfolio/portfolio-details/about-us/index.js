import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'
const Index = props => {
    const [supports] = useState([
        { title: 'Boost SEO ranking' },
        { title: 'Social Sharing' },
        { title: 'Marketing' },
        { title: 'Retention' },
        { title: 'Visual Reviews' },
        { title: 'Reviews Generation' }
    ]);
    const [List1] = useState([
        { title: 'Engineers and Developers', content: '', timer: 50, symbol: '+' },
        { title: 'Customers', content: 'k', timer: 100, symbol: '+' }
    ]);
    const [List2] = useState([
        { title: 'Instances Deployed', content: 'm', timer: 35, symbol: '+' },
        { title: 'Support answers per month', content: 'm', timer: 15, symbol: '+' }
    ]);
    return (
        <>
            <section className="iq-counter-section pt-0 iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-0 mb-5">
                            <TitleSection className='iq-title-box-2'
                                title='We lead and support our customer’s cloud'
                                subTitle='About Us'
                                description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                                titleIcon='' />
                            <div className="iq-list iq-two-column">
                                <ul className="iq-list-with-icon">
                                    {
                                        supports.map((support, index) => (
                                            <li key={index}><i className="ion ion-checkmark-round"></i>{support.title}</li>

                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="iq-btn-container mt-4">
                                <a className="iq-button iq-btn-medium iq-btn-round iq-btn-flat d-inline" href="#">Read More</a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    {
                                        List1.map((list, index1) => (
                                            <div className="iq-counter text-center iq-box-shadow iq-counter-style-1" key={index1}>
                                                <div className="counter-content">
                                                    <p className="iq-counter-info" />
                                                    <span className={"timer " + list.timer}></span>
                                                    <span className="counter-after-content">{list.content}</span>
                                                    <span className="counter-symbol">{list.symbol}</span>
                                                    <h5 className="counter-title-text">{list.title}</h5>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    {
                                        List2.map((list, index2) => (
                                            <div className="iq-counter text-center iq-box-shadow iq-counter-style-1" key={index2}>
                                                <div className="counter-content">
                                                    <p className="iq-counter-info">
                                                        <span className="timer" data-to={list.timer}
                                                            data-speed="5000">{list.timer}</span>
                                                        <span className="counter-after-content">{list.content}</span>
                                                        <span className="counter-symbol">{list.symbol}</span></p>
                                                    <h5 className="counter-title-text">{list.title}</h5>
                                                </div>
                                            </div>
                                        ))
                                    }
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
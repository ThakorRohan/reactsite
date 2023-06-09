import React, { useState } from 'react';
const Index = props => {
    const [List] = useState([
        { title: 'Location', icon: 'ion ion-ios-location', desc: '1234 North Avenue Luke Lane, South Bend, IN 360001' },
        { title: 'Email', icon: 'ion ion-ios-email', desc: 'support@iqonicthemes.com' },
        { title: 'Phone', icon: 'ion ion-ios-telephone', desc: '+91 123 456 7890' },
    ]);
    return (
        <>
            <section className="light-gray-bg">
                <div className="container">
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-4  col-md-6" key={index}>
                                    <div className="iq-process iq-process-step-style-2 text-center">
                                        <div className="iq-process-step">
                                            <div className="iq-step-content"><i aria-hidden="true" className={list.icon}></i> </div>
                                            <div className="iq-step-text-area">
                                                <h4 className="iq-step-title">{list.title}</h4>
                                                <span className="iq-step-desc">{list.desc}</span>
                                            </div>
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
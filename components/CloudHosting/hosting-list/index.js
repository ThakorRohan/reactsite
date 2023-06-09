import React, { useState } from 'react';
const Index = props => {
    const [List] = useState([
        {
            title: 'Simple & Reliable',
            services: [{ title: '10+ Cloud Providers' }, { title: 'All  Apps Supported' }, { title: 'Innovative Control Panel' }, { title: 'Unlimited Applications' }]
        },
        {
            title: 'Free Experience',
            services: [{ title: '10+ Cloud Providers' }, { title: 'All  Apps Supported' }, { title: 'Innovative Control Panel' }, { title: 'Unlimited Applications' }]
        },
        {
            title: 'Performance',
            services: [{ title: '10+ Cloud Providers' }, { title: 'All  Apps Supported' }, { title: 'Innovative Control Panel' }, { title: 'Unlimited Applications' }]
        }
    ]);
    return (
        <>
            <div className="iq-hosting-txt overview-block-pb wow fadeInUp">
                <div className="container">
                    <div className="row iq-hosting-list">
                        {
                            List.map((list, index) => (
                                <div className={index < List.length - 1 ? 'col-lg-4 col-md-6 border-right mb-lg-0 mb-4' : '' + index != 0 ? ' col-lg-4 col-md-6 pl-lg-5' : ''} key={index}>
                                    <h4 className="heading-title mb-4 ">{list.title}</h4>
                                    <div className="iq-list  iq-one-column">
                                        <ul className="iq-list-with-icon">
                                            {
                                                list.services.map((service, index1) => (
                                                    <li key={index1}><i className="ion ion-checkmark-round"></i>{service.title}</li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div >
        </>
    );
}

export default Index
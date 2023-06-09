import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {
    const [List] = useState([
        {
            title: 'Compute Engine',
            description: 'It is a long established fact that a reader will be distracted by the readable'
        },
        {
            title: 'Free Experience',
            services: [{ title: 'LOB apps' }, { title: 'Web hosting' }, { title: 'Databases' }, { title: 'Unlimited Applications' }]
        },
        {
            title: 'Industry',
            services: [{ title: 'Education' }, { title: 'Energy' }, { title: 'Financial services' }, { title: 'Healthcare' }, { title: 'Life sciences' }]
        }
    ]);
    return (
        <>
            <section className="pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 wow fadeInUp">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Explore compute products'
                                subTitle='Product'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row iq-compute-list wow fadeInUp">
                        {
                            List.map((list, index) => (
                                <div className={index < List.length - 1 ? " col-lg-4 col-md-6  border-right mb-lg-0 mb-4" : "col-lg-4 col-md-6 " + index != 0 ? 'pl-lg-5' : ''} key={index}>
                                    <h4 className="heading-title mb-4 ">{list.title}</h4>
                                    <p >{list.description ? list.description : ''}</p>
                                    <div className={list.services ? "iq-list iq-one-column" : ''} >
                                        <ul className="iq-list-with-icon">
                                            {
                                                list.services && list.services != undefined ? (
                                                    list.services.map((service, index) => (
                                                        <li key={index} ><i className="ion ion-checkmark-round"></i>{service.title}</li>

                                                    ))
                                                ) : (
                                                        <div></div>
                                                    )
                                            }
                                        </ul>
                                    </div>
                                </div >

                            ))
                        }

                    </div >
                </div >
            </section >

        </>
    );
}

export default Index
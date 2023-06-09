import React, { useState } from 'react';

import TitleSection from '../../qloud/titlesection'
const Index = props => {
    const [supports] = useState([
        { title: 'Boost SEO ranking' },
        { title: 'Social Sharing' },
        { title: 'Marketing' },
        { title: 'Retention' },
        { title: 'Visual Reviews' },
        { title: 'Reviews Generation' }
    ]);
    return (
        <>

            <section>
                <img src="../../../assets/images/others/shape1.png" className="img-fluid shape-right" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mb-lg-0 mb-5">
                            <img src="../../../assets/images/others/01.png" className="img-fluid" alt="qloud" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <TitleSection
                                className='iq-title-box-2'
                                title='We lead and support our customer’s cloud'
                                subTitle='About Us'
                                titleIcon=''
                                description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            />

                            <div className="iq-list iq-two-column">
                                <ul className="iq-list-with-icon">
                                    {
                                        supports.map((support, index) => (
                                            <li key={index} > <i className="ion ion-checkmark-round"></i>{support.title}</li>
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
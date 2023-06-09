import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
import Client from '../../qloud/client'

const Index = props => {
    const [Image1] = useState([
        { image: '../../../assets/images/client/c1.png' },
        { image: '../../../assets/images/client/c2.png' },
        { image: '../../../assets/images/client/c3.png' },
        { image: '../../../assets/images/client/c4.png' },
        { image: '../../../assets/images/client/c5.png' },
        { image: '../../../assets/images/client/c6.png' },
        { image: '../../../assets/images/client/c7.png' }
    ]);
    return (
        <>
            <section className="light-gray-bg iq-client-hosting">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <TitleSection
                                className='text-center iq-title-box-1'
                                title='Our Partners'
                                titleIcon=''

                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="iq-client iq-client-style-1 text-center iq-has-grascale">
                                    <Client clientData={Image1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    );
}

export default Index
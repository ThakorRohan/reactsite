import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'
import ClientOwl from '../../../qloud/client'
const Index = props => {
    const [Images1] = useState([
        { image: '../../../../assets/images/client/01.png' },
        { image: '../../../../assets/images/client/02.png' },
        { image: '../../../../assets/images/client/03.png' },
        { image: '../../../../assets/images/client/04.png' },
        { image: '../../../../assets/images/client/05.png' },
        { image: '../../../../assets/images/client/06.png' },
        { image: '../../../../assets/images/client/01.png' },
        { image: '../../../../assets/images/client/02.png' },
        { image: '../../../../assets/images/client/03.png' },
    ]);
    const [Images2] = useState([
        { image: '../../../../assets/images/client/01.png' },
        { image: '../../../../assets/images/client/02.png' },
        { image: '../../../../assets/images/client/03.png' },
        { image: '../../../../assets/images/client/04.png' },
        { image: '../../../../assets/images/client/05.png' },
        { image: '../../../../assets/images/client/06.png' },
        { image: '../../../../assets/images/client/01.png' },
        { image: '../../../../assets/images/client/02.png' },
        { image: '../../../../assets/images/client/03.png' },
    ]);
    const [Images3] = useState([
        { image: '../../../../assets/images/client/01.png' },
        { image: '../../../../assets/images/client/02.png' },
        { image: '../../../../assets/images/client/03.png' },
        { image: '../../../../assets/images/client/04.png' },
        { image: '../../../../assets/images/client/05.png' },
        { image: '../../../../assets/images/client/06.png' },
        { image: '../../../../assets/images/client/01.png' },
        { image: '../../../../assets/images/client/02.png' },
        { image: '../../../../assets/images/client/03.png' },
    ]);
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='All Our Great Clients'
                                subTitle='Our Clients'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 align-self-center">
                            <div className="iq-client iq-client-style-1  iq-has-grascale">
                                <ClientOwl clientData={Images1} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 align-self-center">
                            <div className="iq-client iq-client-style-1  iq-has-grascale">
                                <ClientOwl clientData={Images2} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 align-self-center">
                            <div className="iq-client iq-client-style-1  iq-has-grascale">
                                <ClientOwl clientData={Images3} />
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        </>
    );
}

export default Index
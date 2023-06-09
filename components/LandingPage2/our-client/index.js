import React, { useState } from 'react';
import ClientOwl from '../../qloud/client';
const Index = props => {
    const [Images1] = useState([
        { image: '../../../assets/images/client/01.png' },
        { image: '../../../assets/images/client/02.png' },
        { image: '../../../assets/images/client/03.png' },
        { image: '../../../assets/images/client/04.png' },
        { image: '../../../assets/images/client/05.png' },
        { image: '../../../assets/images/client/06.png' },
        { image: '../../../assets/images/client/01.png' },
        { image: '../../../assets/images/client/02.png' },
        { image: '../../../assets/images/client/03.png' },
    ]);
    return (
        <>
            <div className="client-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 align-self-center">
                            <div className="iq-client iq-client-style-1 iq-has-grascale">
                                <ClientOwl clientData={Images1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index
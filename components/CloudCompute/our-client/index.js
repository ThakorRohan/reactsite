import React, { useState } from 'react';
import Client from '../../qloud/client'

const Index = props => {
    const [Images] = useState([
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
            <div className="iq-client-compute overview-block-ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="iq-client iq-client-style-1 text-center iq-has-grascale">
                                <Client clientData={Images} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Index